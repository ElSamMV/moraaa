// Utilidades de validación de entrada compartidas por las rutas.

// Normaliza page/limit: evita NaN, negativos y límites enormes
// (un ?limit=999999999 puede tumbar el servidor y la base de datos).
const MAX_LIMIT = 100;

function sanearPaginacion(query = {}) {
    let page = parseInt(query.page, 10);
    let limit = parseInt(query.limit, 10);

    if (!Number.isFinite(page) || page < 1) page = 1;
    if (!Number.isFinite(limit) || limit < 1) limit = 10;
    if (limit > MAX_LIMIT) limit = MAX_LIMIT;

    return { page, limit, offset: (page - 1) * limit };
}

// El término de búsqueda siempre viaja como parámetro preparado,
// aquí solo se recorta para que no crezca sin control.
function sanearBusqueda(valor) {
    if (typeof valor !== 'string') return '';
    return valor.trim().slice(0, 100);
}

// Lista blanca de campos actualizables: impide que un cliente
// inyecte nombres de columna arbitrarios en el SET del UPDATE.
function construirUpdate(body, camposPermitidos) {
    const fields = [];
    const values = [];

    camposPermitidos.forEach((campo) => {
        if (body[campo] !== undefined) {
            fields.push(`\`${campo}\` = ?`);
            values.push(body[campo]);
        }
    });

    return { fields, values };
}

module.exports = { sanearPaginacion, sanearBusqueda, construirUpdate, MAX_LIMIT };
