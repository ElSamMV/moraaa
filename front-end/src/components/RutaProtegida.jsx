import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Envuelve las páginas que requieren sesión.
 * Sin token en localStorage se redirige al login en lugar de
 * renderizar la vista y dejar que la API responda 401.
 */
function RutaProtegida({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RutaProtegida;
