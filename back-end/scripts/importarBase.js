/**
 * Sube el volcado `database/deportes_db_completo.sql` a la base de datos
 * de la nube. Se ejecuta UNA sola vez, desde tu ordenador.
 *
 * Después de esto tu ordenador ya no pinta nada: los datos quedan en el
 * servidor y la aplicación funciona con el PC apagado.
 *
 * Uso:
 *   npm run db:importar
 *
 * Lee la conexión del archivo .env (DB_HOST, DB_PORT, DB_USER,
 * DB_PASSWORD, DB_NAME, DB_SSL).
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const archivo = path.join(__dirname, '..', '..', 'database', 'deportes_db_completo.sql');

(async () => {
    if (!fs.existsSync(archivo)) {
        console.error('No encuentro el archivo:', archivo);
        process.exit(1);
    }

    const sql = fs.readFileSync(archivo, 'utf8');
    const usaSSL = String(process.env.DB_SSL).toLowerCase() === 'true';

    console.log(`Conectando a ${process.env.DB_HOST}:${process.env.DB_PORT || 3306} ...`);

    let conexion;
    try {
        conexion = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            ssl: usaSSL ? { rejectUnauthorized: false } : undefined,
            multipleStatements: true,   // necesario: el volcado son muchas sentencias
            connectTimeout: 20000
        });
    } catch (e) {
        console.error('No se pudo conectar:', e.code || e.message);
        console.error('Revisa los datos DB_* de tu archivo .env');
        process.exit(1);
    }

    console.log('Conectado. Importando el volcado (puede tardar un minuto)...');

    try {
        await conexion.query(sql);
    } catch (e) {
        console.error('Error durante la importación:', e.sqlMessage || e.message);
        await conexion.end();
        process.exit(1);
    }

    // Recuento de comprobación
    const tablas = ['equipo', 'jugador', 'torneo', 'posicion', 'estadistica_jugador', 'login_administrador'];
    console.log('\nResultado:');
    for (const t of tablas) {
        const [r] = await conexion.query(`SELECT COUNT(*) AS n FROM \`${t}\``);
        console.log(`   ${t.padEnd(22)} ${String(r[0].n).padStart(4)} filas`);
    }

    const [demo] = await conexion.query(
        'SELECT cedula FROM login_administrador WHERE cedula = ?',
        [process.env.DEMO_ADMIN_CEDULA || '1000000000']
    );
    console.log(`\n   usuario demo: ${demo.length ? 'creado' : 'NO ENCONTRADO'}`);
    console.log('\nListo. Ya puedes apagar el ordenador, los datos viven en la nube.');

    await conexion.end();
})();
