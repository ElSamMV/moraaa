import React, { Component } from 'react';
import axios from 'axios';
import { urlApi, demoCredenciales } from '../services/apirest';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cedula: '',
      contrasena: '',
      cargando: false
    };
  }

  manejadorOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Rellena el formulario con la cuenta pública de demostración
  rellenarDemo = () => {
    this.setState({
      cedula: demoCredenciales.cedula,
      contrasena: demoCredenciales.contrasena
    });
  }

  // Permite enviar el formulario con Enter
  manejadorSubmit = (e) => {
    e.preventDefault();
    this.manejadorLogin();
  }

  manejadorLogin = () => {
    const { cedula, contrasena } = this.state;

    if (!cedula || !contrasena) {
      this.props.notificacion('Introduce cédula y contraseña', 'error');
      return;
    }

    this.setState({ cargando: true });

    axios.post(urlApi + 'auth/login', { cedula, contrasena })
      .then(response => {
        if (response.data.message === "Logueo exitoso") {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("cedula", response.data.cedula);

          this.props.notificacion(response.data.message, 'success');
          this.props.navigate('/usuarios');
        } else {
          this.props.notificacion(response.data.message, 'error');
        }
      })
      .catch(error => {
        if (error.response) {
          const msg = error.response.data.message || error.response.data.error || 'Error del servidor';
          this.props.notificacion(msg, 'error');
        } else if (error.request) {
          this.props.notificacion("No se pudo conectar con el servidor", 'error');
        } else {
          this.props.notificacion(error.message, 'error');
        }
      })
      .finally(() => this.setState({ cargando: false }));
  }

  render() {
    const { cargando } = this.state;

    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <form onSubmit={this.manejadorSubmit}>
                    <div className="mb-md-4 mt-md-3">

                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-4">Introduce tu cédula y contraseña</p>

                      {/* Credenciales públicas de prueba */}
                      <div className="demo-box text-start mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="demo-title">Cuenta de prueba</span>
                          <button
                            type="button"
                            className="btn btn-sm btn-light demo-btn"
                            onClick={this.rellenarDemo}
                          >
                            Rellenar
                          </button>
                        </div>
                        <div className="demo-linea">
                          <span>Cédula</span><code>{demoCredenciales.cedula}</code>
                        </div>
                        <div className="demo-linea">
                          <span>Contraseña</span><code>{demoCredenciales.contrasena}</code>
                        </div>
                      </div>

                      <div className="form-outline form-white mb-4 text-start">
                        <label className="form-label" htmlFor="cedula">Cédula</label>
                        <input
                          id="cedula"
                          type="text"
                          name="cedula"
                          autoComplete="username"
                          className="form-control form-control-lg"
                          value={this.state.cedula}
                          onChange={this.manejadorOnChange}
                        />
                      </div>

                      <div className="form-outline form-white mb-4 text-start">
                        <label className="form-label" htmlFor="contrasena">Contraseña</label>
                        <input
                          id="contrasena"
                          type="password"
                          name="contrasena"
                          autoComplete="current-password"
                          className="form-control form-control-lg"
                          value={this.state.contrasena}
                          onChange={this.manejadorOnChange}
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        disabled={cargando}
                      >
                        {cargando ? 'Entrando…' : 'Entrar'}
                      </button>

                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function ContenedorNavegacion(props) {
  let navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}

export default ContenedorNavegacion;
