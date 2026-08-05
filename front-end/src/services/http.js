import axios from 'axios';

/**
 * Interceptor global: si la API responde 401 (token caducado o inválido)
 * se limpia la sesión local y se vuelve al login.
 * Evita quedarse en una pantalla vacía con un token muerto.
 */
export function configurarInterceptores() {
    axios.interceptors.response.use(
        (respuesta) => respuesta,
        (error) => {
            const enLogin = window.location.pathname === '/';
            if (error.response && error.response.status === 401 && !enLogin) {
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                localStorage.removeItem('cedula');
                window.location.replace('/');
            }
            return Promise.reject(error);
        }
    );
}
