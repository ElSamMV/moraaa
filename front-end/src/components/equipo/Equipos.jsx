import React from "react";
import axios from "axios";
import { urlApi } from "../../services/apirest";
import { confirm } from "../Confirmation";
import FormularioEquipo from "./FormularioEquipo";
import Header from '../Header';
import Usuarios from "../usuarios/Usuarios";
import '../../css/Login.css';

class Equipos extends React.Component {
  state = {
    registros: [],
    pagina_actual: 1,
    cadena_busqueda: "",
    token: localStorage.getItem("token"),
    total_paginas: 0,
    limite: 10,
    timeoutBusqueda: null,
    mostrarModal: false,
    equipo_seleccionado: null,
    mostrarModalWin: false
  };

  // Abre/cierra la ventana modal que contiene el listado de Usuarios (admins)
  // para elegir el dato foráneo (id_admin) del equipo
  abrirModal = () => {
    this.setState({ mostrarModalWin: true });
  }

  cerrarModalWin = () => {
    this.setState({ mostrarModalWin: false });
  }

  mostrarModalNuevo = () => {
    const { EditarVariable } = this.props;
    EditarVariable("", "");
    this.setState({
      mostrarModal: true,
      equipo_seleccionado: null
    });
  };

  mostrarModalEditar = (value) => {
    const { EditarVariable } = this.props;
    EditarVariable(value.id_admin, value.nombre_admin);
    this.setState({
      mostrarModal: true,
      equipo_seleccionado: value
    });
  };

  cerrarModal = () => {
    this.setState({ mostrarModal: false });
  };

  alGuardar = () => {
    this.cargarDatos();
    this.cerrarModal();
  };

  componentDidMount = () => {
    this.cargarDatos();
  };

  paginaSiguiente = () => {
    if (this.state.pagina_actual < this.state.total_paginas) {
      this.setState({ pagina_actual: this.state.pagina_actual + 1 }, () => {
        this.cargarDatos();
      });
    }
  };

  paginaAnterior = () => {
    if (this.state.pagina_actual > 1) {
      this.setState({ pagina_actual: this.state.pagina_actual - 1 }, () => {
        this.cargarDatos();
      });
    }
  };

  cargarDatos = () => {
    let url =
      urlApi +
      "equipo?page=" +
      this.state.pagina_actual +
      "&string=" +
      this.state.cadena_busqueda +
      "&limit=" +
      this.state.limite;
    axios
      .get(url, { headers: { Authorization: `Bearer ${this.state.token}` } })
      .then((response) => {
        this.setState({
          registros: response.data.data,
          total_paginas: response.data.totalPages,
        });
      })
      .catch((error) => {
        const { notificacion } = this.props;
        notificacion(error);
      });
  };

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
  };

  eliminar = async (id, nombre_equipo) => {
    if (await confirm("Desea eliminar el equipo " + nombre_equipo + "?")) {
      const { notificacion } = this.props;
      const url = urlApi + "equipo/" + id;
      axios
        .delete(url, {
          headers: { Authorization: `Bearer ${this.state.token}` },
        })
        .then((response) => {
          notificacion("Registro eliminado correctamente");
          this.cargarDatos();
        })
        .catch((error) => {
          notificacion(error.response.data.error || "Error al Eliminar" + error);
        });
    }
  };

  render() {
    return (
      <section className="vh-100 gradient-custom">
        <div className="container-fluid py-5 h-100" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-4 p-md-5">

                  <Header />

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold mb-0">EQUIPOS</h2>
                    <button 
                      className="btn btn-outline-light btn-lg px-4" 
                      onClick={this.mostrarModalNuevo}
                    >
                      + Nuevo
                    </button>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-transparent text-white border-secondary" 
                      placeholder="Buscar por nombre del equipo, país o ciudad..." 
                      value={this.state.cadena_busqueda}
                      onChange={this.manejarBusqueda}
                      style={{ 
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    />
                  </div>

                  {/* TABLA CON ALTURA FIJA: no se encoge con pocos datos */}
                  <div className="table-responsive" style={{ height: '520px', overflowY: 'auto' }}>
                    <table className="table table-dark table-striped table-hover mb-0" 
                      style={{ tableLayout: 'fixed', width: '100%', fontSize: '0.92rem' }}>
                      <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                        <tr>
                          <th style={celdaEncabezado('5%')}>ID</th>
                          <th style={celdaEncabezado('15%')}>NOMBRE</th>
                          <th style={celdaEncabezado('9%')}>PAÍS</th>
                          <th style={celdaEncabezado('9%')}>CIUDAD</th>
                          <th style={celdaEncabezado('14%')}>ESTADIO</th>
                          <th style={celdaEncabezado('7%')}>FUND</th>
                          <th style={celdaEncabezado('13%')}>ENTRENADOR</th>
                          <th style={celdaEncabezado('18%')}>ADMIN</th>
                          <th className="text-center" style={celdaEncabezado('10%')}>ACCIONES</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.registros.length === 0 ? (
                          <tr>
                            <td colSpan="9" className="text-center align-middle" style={{ height: '450px' }}>
                              <div style={{ 
                                color: 'rgba(255,255,255,0.6)', 
                                fontSize: '1.1rem'
                              }}>
                                EQUIPO NO ENCONTRADO
                              </div>
                            </td>
                          </tr>
                        ) : (
                          this.state.registros.map((value, index) => {
                            return (
                              <tr key={index}>
                                <td style={celdaDato()}>{value.id_equipo}</td>
                                <td className="fw-bold" style={celdaDato()}>{value.nombre_equipo}</td>
                                <td style={celdaDato()}>{value.pais}</td>
                                <td style={celdaDato()}>{value.ciudad}</td>
                                <td style={celdaDato()}>{value.estadio}</td>
                                <td style={celdaDato()}>{value.fundacion}</td>
                                <td style={celdaDato()}>{value.entrenador}</td>
                                <td style={celdaDatoSecundario()}>{value.nombre_admin}</td>
                                <td className="text-center" style={{ whiteSpace: 'nowrap', verticalAlign: 'middle', padding: '0.65rem 0.6rem' }}>
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
                                      onClick={() => this.eliminar(value.id_equipo, value.nombre_equipo)}
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
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button 
                      className="btn btn-outline-light px-4" 
                      disabled={this.state.pagina_actual <= 1}
                      onClick={this.paginaAnterior}
                    >
                      Anterior
                    </button>

                    <span className="text-white-50">
                      Página <strong className="text-white">{this.state.pagina_actual}</strong>
                      {this.state.total_paginas > 0 && ` de ${this.state.total_paginas}`}
                    </span>

                    <button 
                      className="btn btn-outline-light px-4" 
                      disabled={this.state.pagina_actual >= this.state.total_paginas}
                      onClick={this.paginaSiguiente}
                    >
                      Siguiente
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.mostrarModal && (
          <div className="modal-overlay" style={modalStyles.overlay}>
            <div className="card bg-dark text-white modal-content" style={modalStyles.content}>
              <div className="card-body p-4">
                <FormularioEquipo
                  equipoAEditar={this.state.equipo_seleccionado}
                  onClose={this.cerrarModal}
                  onGuardar={this.alGuardar}
                  notificacion={this.props.notificacion}
                  abrirModal={this.abrirModal}
                  datoForaneo={this.props.datoForaneo}
                  idForaneo={this.props.idForaneo}
                />
              </div>
            </div>
          </div>
        )}

        {this.state.mostrarModalWin && (
          <div className="modal-overlay" style={modalStyles.overlay}>
            <div className="card bg-dark text-white modal-content" style={{ ...modalStyles.content, maxWidth: '900px' }}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="m-0 text-white">Seleccionar Administrador</h4>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-light" 
                    onClick={this.cerrarModalWin}
                  >
                    × Cerrar
                  </button>
                </div>
                <Usuarios 
                  EditarVariable={this.props.EditarVariable} 
                  cerrarModal={this.cerrarModalWin} 
                />
              </div>
            </div>
          </div>
        )}
      </section>
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
  fontSize: '0.82rem',
  color: 'rgba(255,255,255,0.75)'
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
};

export default Equipos;