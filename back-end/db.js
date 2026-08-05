// db.js — pool de conexiones MySQL con soporte SSL para proveedores cloud
const mysql = require('mysql2');
require('dotenv').config();

// Muchos proveedores gratuitos (Aiven, TiDB Cloud, Clever Cloud) exigen TLS.
// Se activa con DB_SSL=true en el entorno; en local se deja apagado.
const useSSL = String(process.env.DB_SSL).toLowerCase() === 'true';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_POOL_LIMIT) || 10,
    queueLimit: 0,
    enableKeepAlive: true,
    // Evita inyección por múltiples sentencias en una sola query
    multipleStatements: false,
    ...(useSSL ? { ssl: { rejectUnauthorized: false } } : {})
});

// Comprobación de arranque: informa pero no tumba el proceso,
// el pool reintenta la conexión en cada consulta.
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.code || err.message);
        return;
    }
    console.log('Conexion exitosa a la base de datos MySQL');
    connection.release();
});

module.exports = pool;
