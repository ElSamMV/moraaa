//server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Detrás de un proxy (Render, Railway, Fly) para que el rate-limit
// vea la IP real del cliente y no la del balanceador.
app.set('trust proxy', 1);

// Oculta la cabecera X-Powered-By y añade cabeceras de seguridad estándar
app.disable('x-powered-by');
app.use(helmet());

// CORS restringido a los orígenes declarados en el entorno.
// Con CORS_ORIGIN vacío se permite todo (modo desarrollo local).
const origenesPermitidos = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map(o => o.trim())
    .filter(Boolean);

app.use(cors({
    origin: origenesPermitidos.length === 0 ? true : origenesPermitidos,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Límite de tamaño del body: un JSON gigante no debe agotar la memoria
app.use(express.json({ limit: '100kb' }));

// Freno global de peticiones
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Demasiadas peticiones, inténtalo más tarde' }
}));

//importacion de rutas
const authRouter = require('./routes/auth');
const usuariosRouter = require('./routes/usuarios');
const equipoRoutes = require('./routes/equipo');
const torneoRoutes = require('./routes/torneo');

//usar rutas
app.use('/api/auth', authRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/equipo', equipoRoutes);
app.use('/api/torneo', torneoRoutes);

//rutas de ejemplo
app.get("/", (req, res) => {
    res.send("hola desde el servidor express");
});

// Healthcheck para los servicios de hosting
app.get("/health", (req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
});

// 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejador de errores: registra el detalle en el servidor
// y devuelve un mensaje genérico al cliente (no filtra stack traces).
app.use((err, req, res, next) => {
    console.error(err);
    if (err && err.message === 'Not allowed by CORS') {
        return res.status(403).json({ error: 'Origen no permitido' });
    }
    if (err && err.type === 'entity.too.large') {
        return res.status(413).json({ error: 'Petición demasiado grande' });
    }
    if (err && err.type === 'entity.parse.failed') {
        return res.status(400).json({ error: 'JSON inválido' });
    }
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
