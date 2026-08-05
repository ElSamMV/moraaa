/**
 * Crea (o restablece) el administrador de demostración que aparece
 * publicado en la pantalla de login.
 *
 * Uso:  npm run seed:demo
 *
 * Las credenciales se leen del entorno:
 *   DEMO_ADMIN_CEDULA, DEMO_ADMIN_PASSWORD, DEMO_ADMIN_NOMBRE
 */
require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../db');

const cedula = process.env.DEMO_ADMIN_CEDULA || '1000000000';
const password = process.env.DEMO_ADMIN_PASSWORD || 'Demo1234';
const nombre = process.env.DEMO_ADMIN_NOMBRE || 'Usuario Demo';

(async () => {
    try {
        const hash = await bcrypt.hash(password, 12);

        const sql = `
            INSERT INTO login_administrador
                (cedula, contrasena, nombre_completo, fecha_nacimiento, correo, telefono)
            VALUES (?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
                contrasena = VALUES(contrasena),
                nombre_completo = VALUES(nombre_completo)
        `;

        db.query(sql, [cedula, hash, nombre, '2000-01-01', 'demo@ejemplo.com', '0000000000'], (err) => {
            if (err) {
                console.error('No se pudo crear el usuario demo:', err.message);
                process.exit(1);
            }
            console.log('Usuario demo listo.');
            console.log('   Cédula:     ' + cedula);
            console.log('   Contraseña: ' + password);
            process.exit(0);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
