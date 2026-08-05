const express = require('express');
const router = express.Router();
const db = require('../db');
const { verifyToken } = require('../utils/auth');
const bcrypt = require('bcrypt');
const { sanearPaginacion, sanearBusqueda, construirUpdate } = require('../utils/validacion');

const SALT_ROUNDS = 12;

// Campos que un cliente puede modificar vía PUT. Nada fuera de esta lista
// llega al SQL, así no se pueden tocar columnas no previstas.
const CAMPOS_ACTUALIZABLES = ['nombre_completo', 'fecha_nacimiento', 'correo', 'telefono'];

// GET - Listado paginado con búsqueda
router.get('/', verifyToken, (req, res) => {
    const { page, limit, offset } = sanearPaginacion(req.query);
    const string = sanearBusqueda(req.query.string);

    let whereClause = '';
    let queryParams = [];

    if (string !== '') {
        whereClause = 'WHERE cedula LIKE ? OR nombre_completo LIKE ?';
        const searchTerm = `%${string}%`;
        queryParams.push(searchTerm, searchTerm);
    }

    const countQuery = `SELECT COUNT(*) AS total FROM login_administrador ${whereClause}`;

    db.query(countQuery, queryParams, (err, countResult) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener total' });
        }

        const total = countResult[0].total;
        const totalPages = Math.ceil(total / limit);

        const dataParams = [...queryParams, limit, offset];
        const dataQuery = `SELECT id, cedula, nombre_completo, fecha_nacimiento, correo, telefono 
                           FROM login_administrador ${whereClause} LIMIT ? OFFSET ?`;

        db.query(dataQuery, dataParams, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al obtener datos' });
            }

            res.json({
                totalItems: total,
                totalPages: totalPages,
                currentPage: page,
                limit: limit,
                data: results
            });
        });
    });
});

// GET - Obtener un administrador por id
// Se seleccionan columnas explícitas para que el hash de la contraseña
// nunca salga en la respuesta.
router.get('/:id', verifyToken, (req, res) => {
    const query = `SELECT id, cedula, nombre_completo, fecha_nacimiento, correo, telefono 
                   FROM login_administrador WHERE id = ?`;

    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener usuario' });
        }
        if (results.length === 0) return res.status(404).json({ message: 'No encontrado' });
        res.json(results[0]);
    });
});

// POST - Crear nuevo administrador
router.post('/', verifyToken, async (req, res) => {
    const { cedula, contrasena, nombre_completo, fecha_nacimiento, correo, telefono } = req.body;

    if (!cedula || !contrasena || !nombre_completo) {
        return res.status(400).json({
            error: 'Los campos cédula, contraseña y nombre completo son obligatorios'
        });
    }

    if (typeof contrasena !== 'string' || contrasena.length < 8) {
        return res.status(400).json({
            error: 'La contraseña debe tener al menos 8 caracteres'
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(contrasena, SALT_ROUNDS);

        const query = `INSERT INTO login_administrador 
                       (cedula, contrasena, nombre_completo, fecha_nacimiento, correo, telefono) 
                       VALUES (?, ?, ?, ?, ?, ?)`;

        const values = [cedula, hashedPassword, nombre_completo, fecha_nacimiento || null, correo || null, telefono || null];

        db.query(query, values, (err, result) => {
            if (err) {
                console.error(err);

                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ error: 'Ya existe un administrador con esa cédula' });
                }

                return res.status(500).json({ error: 'Error al guardar en la base de datos' });
            }

            res.status(201).json({
                message: 'Administrador registrado exitosamente',
                id: result.insertId,
                cedula: cedula
            });
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al procesar la contraseña' });
    }
});

// PUT - Editar
router.put('/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    const { contrasena } = req.body;

    const { fields, values } = construirUpdate(req.body, CAMPOS_ACTUALIZABLES);

    // La contraseña se trata aparte: antes se guardaba en texto plano
    // en este endpoint, ahora siempre pasa por bcrypt igual que en el alta.
    if (contrasena !== undefined && contrasena !== '') {
        if (typeof contrasena !== 'string' || contrasena.length < 8) {
            return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
        }
        try {
            const hashed = await bcrypt.hash(contrasena, SALT_ROUNDS);
            fields.push('`contrasena` = ?');
            values.push(hashed);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: 'Error al procesar la contraseña' });
        }
    }

    if (fields.length === 0) {
        return res.status(400).json({ error: 'No hay datos para actualizar' });
    }

    const query = `UPDATE login_administrador SET ${fields.join(', ')} WHERE id = ?`;
    values.push(id);

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al actualizar el administrador' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }
        res.json({ message: 'Administrador actualizado correctamente' });
    });
});

// DELETE - Eliminar administrador
router.delete('/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    // Cuenta de demostración protegida: evita que un visitante
    // deje la aplicación pública sin usuario de prueba.
    if (process.env.DEMO_ADMIN_CEDULA) {
        const protegido = process.env.DEMO_ADMIN_CEDULA;
        const check = 'SELECT cedula FROM login_administrador WHERE id = ?';
        return db.query(check, [id], (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al verificar usuario' });
            }
            if (rows.length && String(rows[0].cedula) === String(protegido)) {
                return res.status(403).json({ error: 'La cuenta de demostración no se puede eliminar' });
            }
            eliminarAdministrador(id, res);
        });
    }

    eliminarAdministrador(id, res);
});

function eliminarAdministrador(id, res) {
    // Nombres de tabla fijos en código, nunca provenientes del cliente
    const tablasRelacionadas = ['equipo', 'jugador', 'torneo', 'estadistica_jugador'];

    const verificaciones = tablasRelacionadas.map((tabla) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT COUNT(*) AS contador FROM \`${tabla}\` WHERE id_admin = ?`;
            db.query(query, [id], (err, result) => {
                if (err) return reject({ tabla, err });
                resolve({ tabla, contador: result[0].contador });
            });
        });
    });

    Promise.all(verificaciones)
        .then((resultados) => {
            const conRelaciones = resultados.filter(r => r.contador > 0);

            if (conRelaciones.length > 0) {
                return res.status(409).json({
                    error: `El administrador tiene registros relacionados.`
                });
            }

            db.query('DELETE FROM login_administrador WHERE id = ?', [id], (err, result) => {
                if (err) {
                    console.error('Error al eliminar:', err);
                    return res.status(500).json({ error: 'Error al eliminar usuario' });
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Administrador no encontrado' });
                }
                res.json({ message: 'ADMINISTRADOR eliminado exitosamente', id });
            });
        })
        .catch(({ tabla, err }) => {
            console.error(`Error verificando tabla ${tabla}:`, err);
            res.status(500).json({ error: 'Error interno al verificar relaciones' });
        });
}

module.exports = router;
