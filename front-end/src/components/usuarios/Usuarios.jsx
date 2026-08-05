import React from "react";
import axios from "axios";
import { urlApi } from "../../services/apirest";
import { confirm } from "../Confirmation";
import FormularioUsuario from "./FormularioUsuario";
import Header from '../Header';
import '../../css/Login.css';

class Usuarios extends React.Component {

    state = {
        registros: [],
        pagina_actual: 1,
        cadena_busqueda: "",
        token: localStorage.getItem('token'),
        total_paginas: 0,
        limite: 10,
        timeoutBusqueda: null,
        mostrarModal: false,
        usuario_seleccionado: null
    }

    cargarDatos = () => {
        let url = urlApi + "usuarios?page=" + this.state.pagina_actual + "&string=" + this.state.cadena_busqueda + "&limit=" + this.state.limite;
        
        console.log("GET", url);
        
        axios
            .get(url, {
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                }
            })
            .then(response => {
                this.setState({
                    registros: response.data.data || response.data.usuarios || response.data,
                    total_paginas: response.data.totalPages || response.data.total_paginas || 0
                })
            })
            .catch(error => {
                console.error("Error:", error.message);
                const { notificacion } = this.props;
                notificacion(error.message || "Error al cargar datos");
            })
    }

    componentDidMount = () => {
        this.cargarDatos();
    }

    // Se invoca cuando Usuarios se muestra DENTRO de la ventana modal de otro
    // formulario (Equipo/Torneo) y el usuario elige un administrador de la lista
    cambiarIdForaneo(codigo, dato) {
        const { EditarVariable } = this.props;
        EditarVariable(codigo, dato);
        const { cerrarModal } = this.props;
        cerrarModal();
    }

    cambiarPagina = (nueva_pagina) => {
        this.setState({ pagina_actual: nueva_pagina }, () => {
            this.cargarDatos();
        });
    }

    manejarBusqueda = (e) => {
        const texto = e.target.value;
        
        if (this.state.timeoutBusqueda) {
            clearTimeout(this.state.timeoutBusqueda);
        }

        this.setState({ 
            cadena_busqueda: texto,
            pagina_actual: 1,
            timeoutBusqueda: setTimeout(() => {
                this.cargarDatos();
            }, 400)
        });
    }

    mostrarModalNuevo = () => {
        this.setState({
            mostrarModal: true,
            usuario_seleccionado: null
        })
    }

    mostrarModalEditar = (usuario) => {
        this.setState({
            mostrarModal: true,
            usuario_seleccionado: usuario
        })
    }

    cerrarModal = () => {
        this.setState({ mostrarModal: false })
    }

    alGuardar = () => {
        this.cargarDatos(); //Recargar datos
        this.cerrarModal(); //Cerrar ventana modal
    }

    eliminar = async (id, nombre) => {
        if (await confirm(`¿Está seguro de eliminar el registro: ${nombre}?`)) {
            const { notificacion } = this.props;
            let url = urlApi + "usuarios/" + id;
            axios
                .delete(url, {
                    headers: {
                        'Authorization': `Bearer ${this.state.token}`
                    }
                })
                .then(response => {
                    notificacion("Registro eliminado correctamente");
                    this.cargarDatos();
                })
                .catch(error => {
                    notificacion(error.response?.data?.message || error.message || "Error al eliminar");
                })
        }
    }

    render() {
        // esPagina = true  -> se está viendo como página independiente en /usuarios
        // esPagina = false -> se está viendo EMBEBIDO dentro del modal "Seleccionar
        //                     Administrador" que abren Equipos.jsx y Torneo.jsx
        const esPagina = this.props.NoModal === true;

        // Filas de la tabla (mismo mapeo de datos en ambos casos, solo cambia el
        // ícono de acción según el contexto, igual que en el archivo original)
        const filas = this.state.registros.map((value) => (
            <tr key={value.id}>
                <td style={celdaDato()}>{value.id}</td>
                <td style={celdaDato()}>{value.cedula}</td>
                <td className="fw-bold" style={celdaDato()}>{value.nombre_completo}</td>
                <td style={celdaDato()}>
                    {value.fecha_nacimiento && value.fecha_nacimiento.split('T')[0]}
                </td>
                <td style={{ ...celdaDatoSecundario(), color: esPagina ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.6)' }}>{value.correo}</td>
                <td style={celdaDato()}>{value.telefono}</td>
                <td className="text-center" style={{ whiteSpace: 'nowrap', verticalAlign: 'middle', padding: '0.65rem 0.6rem' }}>
                    {esPagina ? (
                        <div>
                            <svg
                                onClick={() => this.mostrarModalEditar(value)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#00d2ff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ cursor: 'pointer', marginRight: '15px' }}
                            >
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                <path d="M16 5l3 3" />
                            </svg>

                            <svg
                                onClick={() => this.eliminar(value.id, value.nombre_completo)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff6b6b"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ cursor: 'pointer' }}
                            >
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg
                                onClick={() => this.cambiarIdForaneo(value.id, value.nombre_completo)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#c7a124"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ cursor: 'pointer' }}
                            >
                                <title>Seleccionar administrador</title>
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    )}
                </td>
            </tr>
        ));

        const buscador = (
            <div className="form-outline mb-4">
                <input 
                    type="text" 
                    className={esPagina
                        ? "form-control form-control-lg bg-transparent text-white border-secondary"
                        : "form-control form-control-lg"}
                    placeholder="Buscar por cédula o nombre completo..." 
                    value={this.state.cadena_busqueda}
                    onChange={this.manejarBusqueda}
                    style={esPagina
                        ? { borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.3)' }
                        : { borderRadius: '0.5rem' }}
                />
            </div>
        );

        const tabla = (
            // En la página independiente la altura es 520px, igual que Equipos/Torneo.
            // Embebido en el modal se reduce, así el selector se ajusta al tamaño real
            // del modal (900px x 90vh) en vez de intentar ocupar el 100% del viewport.
            <div className="table-responsive" style={{ height: esPagina ? '520px' : '380px', overflowY: 'auto' }}>
                <table 
                    className={esPagina
                        ? "table table-dark table-striped table-hover mb-0"
                        : "table table-striped table-hover mb-0"}
                    style={{ tableLayout: 'fixed', width: '100%', fontSize: '0.92rem' }}
                >
                    <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                        <tr>
                            <th style={celdaEncabezado('5%')}>ID</th>
                            <th style={celdaEncabezado('13%')}>CÉDULA</th>
                            <th style={celdaEncabezado('22%')}>NOMBRE</th>
                            <th style={celdaEncabezado('12%')}>FECHA NAC.</th>
                            <th style={celdaEncabezado('25%')}>CORREO</th>
                            <th style={celdaEncabezado('13%')}>TELÉFONO</th>
                            <th className="text-center" style={celdaEncabezado('10%')}>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.registros.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center align-middle" style={{ height: esPagina ? '450px' : '300px' }}>
                                    <div style={{ 
                                        color: esPagina ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)', 
                                        fontSize: '1.1rem'
                                    }}>
                                        ADMINISTRADOR NO ENCONTRADO
                                    </div>
                                </td>
                            </tr>
                        ) : filas}
                    </tbody>
                </table>
            </div>
        );

        const paginacion = (
            <div className="d-flex justify-content-between align-items-center mt-4">
                <button 
                    className={esPagina ? "btn btn-outline-light px-4" : "btn btn-outline-secondary px-4"}
                    disabled={this.state.pagina_actual <= 1}
                    onClick={() => this.cambiarPagina(this.state.pagina_actual - 1)}
                >
                    Anterior
                </button>
                
                <span className={esPagina ? "text-white-50" : "text-muted"}>
                    Página <strong className={esPagina ? "text-white" : "text-dark"}>{this.state.pagina_actual}</strong>
                    {this.state.total_paginas > 0 && ` de ${this.state.total_paginas}`}
                </span>
                
                <button 
                    className={esPagina ? "btn btn-outline-light px-4" : "btn btn-outline-secondary px-4"}
                    disabled={this.state.pagina_actual >= this.state.total_paginas}
                    onClick={() => this.cambiarPagina(this.state.pagina_actual + 1)}
                >
                    Siguiente
                </button>
            </div>
        );

        // ---- Página independiente (/usuarios): mismo diseño que Equipos/Torneo ----
        if (esPagina) {
            return (
                <section className="vh-100 gradient-custom">
                    <div className="container-fluid py-5 h-100" style={{ maxWidth: '1600px', margin: '0 auto' }}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-4 p-md-5">

                                        <Header />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h2 className="fw-bold mb-0">ADMINISTRADORES</h2>
                                            <button 
                                                className="btn btn-outline-light btn-lg px-4" 
                                                onClick={this.mostrarModalNuevo}
                                            >
                                                + Nuevo
                                            </button>
                                        </div>

                                        {buscador}
                                        {tabla}
                                        {paginacion}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.mostrarModal && (
                        <div className="modal-overlay" style={modalStyles.overlay}>
                            <div className="card bg-dark text-white modal-content" style={modalStyles.content}>
                                <div className="card-body p-4">
                                    <FormularioUsuario
                                        usuarioAEditar={this.state.usuario_seleccionado}
                                        onClose={this.cerrarModal}
                                        onGuardar={this.alGuardar}
                                        notificacion={this.props.notificacion}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            );
        }

        // ---- Modo selector embebido dentro del modal "Seleccionar Administrador" ----
        // Sin section vh-100, sin container-fluid de 1600px y sin card oscura: así el
        // contenido se ajusta al tamaño real del modal que ya lo envuelve en
        // Equipos.jsx / Torneo.jsx, y se redimensiona correctamente.
        return (
            <div>
                {buscador}
                {tabla}
                {paginacion}
            </div>
        );
    }
}

// Estilo base de las celdas de encabezado de la tabla (unificado en todas las páginas de listado)
const celdaEncabezado = (ancho) => ({
    width: ancho,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0.85rem 0.6rem',
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    verticalAlign: 'middle'
});

// Estilo base de las celdas de datos de la tabla (unificado en todas las páginas de listado)
const celdaDato = () => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0.65rem 0.6rem',
    verticalAlign: 'middle'
});

// Estilo para columnas secundarias (texto más pequeño, ej. admin/correo)
const celdaDatoSecundario = () => ({
    ...celdaDato(),
    fontSize: '0.82rem'
});

//Estilos para ventana modal
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    content: {
        borderRadius: '1rem',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
    }
}

export default Usuarios;