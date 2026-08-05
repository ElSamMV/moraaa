const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '2h';

// El servidor no debe arrancar con un secreto ausente o trivial:
// sin esto, cualquiera podría firmar tokens válidos.
if (!JWT_SECRET || JWT_SECRET.length < 32) {
    throw new Error(
        'JWT_SECRET no definido o demasiado corto (mínimo 32 caracteres). ' +
        'Genera uno con: node -e "console.log(require(\'crypto\').randomBytes(48).toString(\'hex\'))"'
    );
}

// Genera un token JWT firmado
const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
        algorithm: 'HS256'
    });
};

// Middleware que valida el token del header Authorization: Bearer <token>
const verifyToken = (req, res, next) => {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');

    if (!token || scheme.toLowerCase() !== 'bearer') {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        // Fijar el algoritmo evita ataques de confusión de algoritmo (alg: none)
        req.user = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalido' });
    }
};

module.exports = { generateToken, verifyToken };
