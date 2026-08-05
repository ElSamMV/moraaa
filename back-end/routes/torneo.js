const express = require('express');
const router = express.Router();
const db = require('../db');
const { verifyToken } = require('../utils/auth');
const { sanearPaginacion, sanearBusqueda, construirUpdate } = require('../utils/validacion');

// Lista blanca de columnas actualizables vía PUT
const CAMPOS_ACTUALIZABLES = ['nombre', 'tipo', 'pais_sede', 'fecha_inicio', 'fecha_fin', 'estado', 'id_admin'];

//Metodos GET UNICO
router.get('/:id', verifyToken, (req, res) => {
    const { id } = req.params; // Captura el id del registro
    //Consulta para obtener un unico registro
    const query = `SELECT t.*, la.nombre_completo AS nombre_admin 
                    FROM torneo t 
                    LEFT JOIN login_administrador la ON t.id_admin = la.id 
                    WHERE t.id_torneo = ?`;
    db.query(query, [id], (err, results) => {

        if (err) {//error en la base de datos o en la consulta
            console.error(err)
            return res.status(500).json({ error: 'Error al obtener el torneo' })
        }
        //sino se encuentra el usuario
        if (results.length === 0) {
            return res.status(404).json({ message: 'Torneo no encontrado' })
        }
        //Si se encuentra devuelve los datos
        res.json(results[0]);


    });
});

router.get('/', verifyToken, (req, res) => {
    const { page, limit, offset } = sanearPaginacion(req.query);
    const string = sanearBusqueda(req.query.string);
    let whereClause = '';
    let queryParams = [];

    if (string) {
        // Nota: se corrigen los nombres de columnas (la tabla torneo no tiene columnas
        // "torneo" ni "nombre_estadio", tiene "nombre" y "estado")
        whereClause = 'WHERE t.id_torneo LIKE ? OR t.nombre LIKE ? OR t.pais_sede LIKE ? OR t.estado LIKE ?';
        const searchTerm = `%${string}%`;
        queryParams.push(searchTerm, searchTerm, searchTerm, searchTerm);
    }

    // Consulta total
    const countQuery = `SELECT COUNT(*) AS total FROM torneo t ${whereClause}`;

    db.query(countQuery, queryParams, (err, countResult) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener total de torneos' });
        }

        const totalTorneos = countResult[0].total;
        const totalPages = Math.ceil(totalTorneos / limit);

        // Consulta paginada
        // Se agrega JOIN con login_administrador para traer el nombre del administrador (dato foráneo)
        const torneosQuery = `SELECT t.*, la.nombre_completo AS nombre_admin 
                               FROM torneo t 
                               LEFT JOIN login_administrador la ON t.id_admin = la.id 
                               ${whereClause} LIMIT ? OFFSET ?`;
        const finalParams = [...queryParams, limit, offset];

        db.query(torneosQuery, finalParams, (err, torneosResult) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al obtener los torneos' });
            }

            res.json({
                totalItems: totalTorneos,
                totalPage: totalPages,
                currentPage: page,
                limit: limit,
                data: torneosResult
            });
        });
    });
});

// POST - Crear nuevo torneo
router.post('/', verifyToken, (req, res) => {
    // 1. Extraemos los campos exactos de tu tabla 'torneo'
    const { nombre, tipo, pais_sede, fecha_inicio, fecha_fin, estado, id_admin } = req.body;

    // 2. Validación de campos obligatorios (puedes ajustar cuáles son obligatorios)
    if (!nombre || !tipo || !id_admin) {
        return res.status(400).json({
            error: 'Los campos nombre, tipo e id_admin son obligatorios'
        });
    }

    // 3. Preparamos la consulta SQL para la tabla 'torneo'
    // Nota: id_torneo no se incluye si es AUTO_INCREMENT en tu DB
    const query = `INSERT INTO torneo 
                   (nombre, tipo, pais_sede, fecha_inicio, fecha_fin, estado, id_admin) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const values = [nombre, tipo, pais_sede, fecha_inicio, fecha_fin, estado, id_admin];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);

            // Error de llave foránea (Si el id_admin no existe en la tabla login_administrador)
            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                return res.status(400).json({ error: 'El id_admin proporcionado no existe' });
            }

            return res.status(500).json({ error: 'Error al guardar el torneo en la base de datos' });
        }

        res.status(201).json({
            message: 'Torneo registrado exitosamente',
            id_torneo: result.insertId // Esto devuelve el ID que la DB generó automáticamente
        });
    });
});

// PUT - Actualizar torneo
router.put('/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    // Solo se actualizan columnas de la lista blanca
    const { fields, values } = construirUpdate(req.body, CAMPOS_ACTUALIZABLES);

    if (fields.length === 0) {
        return res.status(400).json({ error: 'No hay datos para actualizar' });
    }

    const query = `UPDATE torneo SET ${fields.join(', ')} WHERE id_torneo = ?`;
    values.push(id);

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);

            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                return res.status(400).json({ error: 'El id_admin proporcionado no existe' });
            }

            return res.status(500).json({ error: 'Error al actualizar el torneo' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Torneo no encontrado' });
        }

        res.json({ message: 'Torneo actualizado correctamente' });
    });
});
//*** eliminar ***
router.delete('/:id', verifyToken, (req, res) => {
    // 1. Obtener el id del torneo desde los parámetros de la URL
    const { id } = req.params;

    // 2. Contar registros dependientes (Estadísticas vinculadas)
    const contar_dependientes_query = `
        SELECT 
            (SELECT COUNT(*) FROM estadistica_jugador WHERE id_torneo = ?) AS total_estadisticas
    `;

    db.query(contar_dependientes_query, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al verificar registros dependientes' });
        }

        // Verifica si el torneo tiene estadísticas antes de borrar
        if (result[0].total_estadisticas > 0) {
            return res.status(409).json({
                error: `No se puede eliminar: el torneo tiene ${result[0].total_estadisticas} registros de estadísticas asociados`
            });
        }

        // 3. Verificar si el torneo existe realmente
        const verificar_existencia_query = 'SELECT COUNT(*) AS total_torneos FROM torneo WHERE id_torneo = ?';

        db.query(verificar_existencia_query, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al verificar la existencia del torneo' });
            }

            // Manejo del error 404 si el ID no existe
            if (result[0].total_torneos === 0) {
                return res.status(404).json({ error: 'Torneo no encontrado' });
            }

            // 4. Definir la consulta SQL para eliminar
            const delete_query = "DELETE FROM torneo WHERE id_torneo = ?";

            // 5. Ejecutar la eliminación final
            db.query(delete_query, [id], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error al ejecutar la eliminación en la base de datos' });
                }

                res.status(200).json({
                    message: 'Torneo eliminado correctamente',
                    id_torneo: id
                });
            });
        });
    });
});

module.exports = router;