import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('cedula');
        navigate('/', { replace: true });
    };

    return (
        <div>
            <center>
                <Link to='/usuarios'>
                    <Button style={{ marginRight: "10px" }}>Administradores</Button>
                </Link>
                <Link to='/equipos'>
                    <Button style={{ marginRight: "10px" }}>Equipos</Button>
                </Link>
                <Link to='/torneo'>
                    <Button style={{ marginRight: "10px" }}>Torneos</Button>
                </Link>
                <Button variant="outline-secondary" onClick={cerrarSesion}>
                    Cerrar sesión
                </Button>
            </center>
        </div>
    );
}

export default Header;
