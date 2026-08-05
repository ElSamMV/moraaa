/**
 * Carga automática de la base de datos.
 *
 * La primera vez que el servidor arranca contra una base vacía, crea las
 * tablas y las llena con el volcado incluido en el repositorio. En los
 * arranques siguientes detecta que ya existen y no toca nada.
 *
 * Esto permite desplegar sin ejecutar nada desde un ordenador: subes el
 * código, Render arranca y la base queda lista sola.
 *
 * Seguridad: el volcado empieza con DROP TABLE, así que solo se ejecuta
 * cuando la base está realmente vacía. Para reimportar a propósito hay
 * que poner DB_FORZAR_IMPORT=true en las variables de entorno.
 */
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// El archivo puede estar junto al backend o en la carpeta database/ del repo
const RUTAS = [
    path.join(__dirname, '..', 'database', 'deportes_db_completo.sql'),
    path.join(__dirname, '..', '..', 'database', 'deportes_db_completo.sql')
];

function localizarVolcado() {
    return RUTAS.find(r => fs.existsSync(r)) || null;
}

async function abrirConexion(conMultiples) {
    const usaSSL = String(process.env.DB_SSL).toLowerCase() === 'true';
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: usaSSL ? { rejectUnauthorized: false } : undefined,
        multipleStatements: !!conMultiples,
        connectTimeout: 20000
    });
}

async function asegurarBaseDeDatos() {
    const forzar = String(process.env.DB_FORZAR_IMPORT).toLowerCase() === 'true';

    let conexion;
    try {
        conexion = await abrirConexion(false);
    } catch (e) {
        console.error('[bootstrap] No se pudo conectar a la base:', e.code || e.message);
        return { ok: false, motivo: 'sin conexión' };
    }

    // ¿Ya hay datos?
    let yaExiste = false;
    try {
        const [filas] = await conexion.query(
            "SELECT COUNT(*) AS n FROM information_schema.tables " +
            "WHERE table_schema = ? AND table_name = 'login_administrador'",
            [process.env.DB_NAME]
        );
        yaExiste = filas[0].n > 0;
    } catch (e) {
        console.error('[bootstrap] No se pudo inspeccionar la base:', e.message);
    }
    await conexion.end();

    if (yaExiste && !forzar) {
        console.log('[bootstrap] La base ya está creada, no se toca nada.');
        return { ok: true, motivo: 'ya existía' };
    }

    if (yaExiste && forzar) {
        console.log('[bootstrap] DB_FORZAR_IMPORT=true — se reimporta y se pierden los datos actuales.');
    }

    const archivo = localizarVolcado();
    if (!archivo) {
        console.error('[bootstrap] No encuentro deportes_db_completo.sql. Buscado en:', RUTAS.join(' | '));
        return { ok: false, motivo: 'volcado no encontrado' };
    }

    console.log('[bootstrap] Base vacía. Importando el volcado inicial...');

    let carga;
    try {
        carga = await abrirConexion(true);
        await carga.query(fs.readFileSync(archivo, 'utf8'));

        const tablas = ['login_administrador', 'posicion', 'equipo', 'torneo', 'jugador', 'estadistica_jugador'];
        for (const t of tablas) {
            const [r] = await carga.query(`SELECT COUNT(*) AS n FROM \`${t}\``);
            console.log(`[bootstrap]   ${t.padEnd(22)} ${String(r[0].n).padStart(4)} filas`);
        }
        console.log('[bootstrap] Base de datos lista.');
        return { ok: true, motivo: 'importada' };
    } catch (e) {
        console.error('[bootstrap] Falló la importación:', e.sqlMessage || e.message);
        return { ok: false, motivo: e.sqlMessage || e.message };
    } finally {
        if (carga) await carga.end().catch(() => {});
    }
}

module.exports = { asegurarBaseDeDatos };
