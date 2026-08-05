const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');
const { generateToken } = require('../utils/auth');

// Freno específico contra fuerza bruta en el login.
const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true,
    message: { message: 'Demasiados intentos de acceso. Espera unos minutos.' }
});

// Hash "señuelo" con el que se compara cuando la cédula no existe.
// Así el tiempo de respuesta es el mismo exista o no el usuario y
// no se puede deducir qué cédulas están registradas.
const HASH_SENUELO = '$2b$12$zhjBa2P0o0LkMvKEyH4oP.17RT/nU1lca4/m7Tp6u/PzgKGqZ/Vxa';

// POST - Autenticación de administrador
router.post('/login', loginLimiter, (req, res) => {
    const { cedula, contrasena } = req.body;

    // Validar tipo y presencia de los campos
    if (typeof cedula !== 'string' || typeof contrasena !== 'string' || !cedula || !contrasena) {
        return res.status(400).json({
            error: 'Los campos cédula y contraseña son obligatorios'
        });
    }

    if (cedula.length > 50 || contrasena.length > 200) {
        return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
    }

    db.query(
        'SELECT id, cedula, contrasena FROM login_administrador WHERE cedula = ? LIMIT 1',
        [cedula.trim()],
        async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error en el servidor' });
            }

            const user = results[0];
            const hash = user ? user.contrasena : HASH_SENUELO;

            let esValida = false;
            try {
                esValida = await bcrypt.compare(contrasena, hash);
            } catch (e) {
                console.error(e);
                return res.status(500).json({ error: 'Error en el servidor' });
            }

            // Mensaje idéntico en ambos casos: no revela si la cédula existe
            if (!user || !esValida) {
                return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
            }

            const token = generateToken({ id: user.id, cedula: user.cedula });

            res.json({
                message: 'Logueo exitoso',
                id: user.id,
                cedula: user.cedula,
                token
            });
        }
    );
});

module.exports = router;
