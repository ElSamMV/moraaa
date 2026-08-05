# Project Context: front-end

Generated: 2026-07-15T22:59:50.914Z via genctx

## Configuration
```json
{
  "include": [
    "**/*"
  ],
  "exclude": [
    "node_modules",
    ".git",
    "dist",
    "build",
    "out",
    "target",
    "vendor",
    "bin",
    ".next",
    ".nuxt",
    ".venv",
    "venv",
    ".env",
    ".env.*"
  ],
  "options": {
    "removeComments": false,
    "removeEmptyLines": false,
    "treeFull": false,
    "maxFileSizeKB": 2048,
    "maxTotalTokens": 0,
    "maxFileTokens": 0,
    "useGitignore": true
  }
}
```

## Directory Structure

```
├── 📁 public/
│   ├── 📄 index.html
│   ├── 📄 manifest.json
│   └── 📄 robots.txt
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 equipo/
│   │   │   ├── 📄 Equipos.jsx
│   │   │   └── 📄 FormularioEquipo.jsx
│   │   ├── 📁 torneo/
│   │   │   ├── 📄 FormularioTorneo.jsx
│   │   │   └── 📄 Torneo.jsx
│   │   ├── 📁 usuarios/
│   │   │   ├── 📄 FormularioUsuario.jsx
│   │   │   └── 📄 Usuarios.jsx
│   │   ├── 📄 Confirmation.js
│   │   ├── 📄 Header.jsx
│   │   └── 📄 Login.jsx
│   ├── 📁 css/
│   │   ├── 📄 App.css
│   │   ├── 📄 Login.css
│   │   └── 📄 index.css
│   ├── 📁 services/
│   │   └── 📄 apirest.js
│   ├── 📄 App.js
│   ├── 📄 App.test.js
│   ├── 📄 index.js
│   ├── 📄 logo.svg
│   ├── 📄 reportWebVitals.js
│   └── 📄 setupTests.js
├── 📄 README.md
└── 📄 package.json
```

## File Contents

### `README.md`

```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

### `package.json`

```json
{
  "name": "frond-end",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.16.1",
    "bootstrap": "^5.3.8",
    "react": "^19.2.7",
    "react-bootstrap": "^2.10.10",
    "react-confirm": "^0.5.0",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.16.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

### `public\index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### `public\manifest.json`

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### `public\robots.txt`

```plaintext
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

### `src\App.js`

```javascript
import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Usuarios from './components/usuarios/Usuarios';
import Equipos from './components/equipo/Equipos';
import Torneo from './components/torneo/Torneo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NoModal: true,
      idForaneo: "0",
      datoForaneo: "0",
    };
    this.EditarVariable = this.EditarVariable.bind(this);
  }

  // Función que el componente hijo (dentro del modal) usa para
  // devolver al padre el id y el dato del registro foráneo seleccionado
  EditarVariable(valorid, valorDato) {
    this.setState({
      idForaneo: valorid,
      datoForaneo: valorDato
    });
  }

  notificacion = (mensaje, tipo = 'info', duracion = 3000) => {
    let container = document.querySelector('.notif-container');
    const notif = document.createElement('div');
    notif.className = `notif-toast ${tipo}`;
    notif.innerText = mensaje;
    container.appendChild(notif);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        notif.classList.add('show');
      });
    });
    setTimeout(() => {
      notif.classList.remove('show');
      notif.classList.add('fade-out');
      notif.addEventListener('transitionend', () => {
        notif.remove();
      });
    }, duracion);
  }

  render() {
    return (
      <div className="App">
        <div className='notif-container'></div>
        <Router>
          <Routes>
            <Route path='/' element={<Login notificacion={this.notificacion} />} />
            <Route path='/usuarios' element={<Usuarios notificacion={this.notificacion} NoModal={this.state.NoModal} />} />
            <Route path='/equipos' element={<Equipos notificacion={this.notificacion} EditarVariable={this.EditarVariable} idForaneo={this.state.idForaneo} datoForaneo={this.state.datoForaneo} />} />
            <Route path='/torneo' element={<Torneo notificacion={this.notificacion} EditarVariable={this.EditarVariable} idForaneo={this.state.idForaneo} datoForaneo={this.state.datoForaneo} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
```

### `src\App.test.js`

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

### `src\components\Confirmation.js`

```javascript
import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { confirmable, createConfirmation } from "react-confirm";

const Confirmation = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "Confirmation",
  confirmation,
  show,
  proceed,
  enableEscape = true
}) => {
  return (
    <div className="static-modal">
      <Modal
        animation={false}
        show={show}
        onHide={() => proceed(false)}
        backdrop={enableEscape ? true : "static"}
        keyboard={enableEscape}
        contentClassName="bg-dark text-white"
        data-bs-theme="dark"
        style={{ borderRadius: '1rem' }}
      >
        <Modal.Header 
          style={{ 
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            backgroundColor: '#212529'
          }}
        >
          <Modal.Title style={{ color: '#ffffff', fontWeight: 'bold' }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{ 
          backgroundColor: '#212529', 
          color: '#ffffff',
          fontSize: '1rem'
        }}>
          {confirmation}
        </Modal.Body>
        
        <Modal.Footer style={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: '#212529'
        }}>
          <Button 
            variant="outline-light"
            onClick={() => proceed(false)}
            style={{ 
              borderRadius: '0.5rem',
              padding: '0.5rem 1.5rem'
            }}
          >
            {cancelLabel}
          </Button>
          <Button
            variant="outline-light"
            onClick={() => proceed(true)}
            style={{ 
              borderRadius: '0.5rem',
              padding: '0.5rem 1.5rem',
              borderColor: '#ff6b6b',
              color: '#ff6b6b'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ff6b6b';
            }}
          >
            {okLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func,
  enableEscape: PropTypes.bool
};

export function confirm(
  confirmation,
  proceedLabel = "OK",
  cancelLabel = "cancel",
  options = {}
) {
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options
  });
}
```

### `src\components\equipo\Equipos.jsx`

```jsx
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
            <div className="modal-content" style={modalStyles.content}>
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
        )}

        {this.state.mostrarModalWin && (
          <div className="modal-overlay" style={modalStyles.overlay}>
            <div className="modal-content" style={{ ...modalStyles.content, maxWidth: '900px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="m-0">Seleccionar Administrador</h4>
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-secondary" 
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
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  }
};

export default Equipos;
```

### `src\components\equipo\FormularioEquipo.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { urlApi } from "../../services/apirest";
//import { SoloLetras } from '../../utils/validaciones';

const FormularioEquipo = ({ equipoAEditar, onClose, onGuardar, notificacion, abrirModal, datoForaneo, idForaneo }) => {

  // 1. Estado inicial del formulario
  const [form, setForm] = useState({
    nombre_equipo: '',
    pais: '',
    ciudad: '',
    estadio: '',
    fundacion: '',
    entrenador: '',
    id_admin: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 2. useEffect: Detectar si estamos en modo EDICIÓN
  useEffect(() => {
    if (equipoAEditar) {
      setForm({
        ...equipoAEditar
      });
    } else {
      setForm({
        nombre_equipo: '',
        pais: '',
        ciudad: '',
        estadio: '',
        fundacion: '',
        entrenador: '',
        id_admin: ''
      });
    }

  }, [equipoAEditar]);

  useEffect(() => {
    // Si idForaneo tiene un valor real (no es vacío ni "0")
    if (idForaneo && idForaneo !== "0") {
      setForm(estadoAnterior => ({
        ...estadoAnterior,
        id_admin: idForaneo // Actualizamos el ID interno del formulario (llave foránea)
      }));
    }
  }, [idForaneo]);

  // 3. Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // 4. Envío del formulario (Create o Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');

    // Determinar si es POST (crear) o PUT (editar)
    const method = equipoAEditar ? 'put' : 'post';
    // Si editamos, agregamos el ID a la URL. Si creamos, usamos la URL base.
    const url = equipoAEditar
      ? urlApi + `equipo/${equipoAEditar.id_equipo}` //Put
      : urlApi + 'equipo'; //Post

    try {
      await axios({
        method: method,
        url: url,
        data: form,
        headers: { Authorization: `Bearer ${token}` }
      });

      // Si todo sale bien:
      notificacion(equipoAEditar ? 'Equipo actualizado' : 'Equipo registrado');
      onGuardar(); // Llamamos a la función del padre para recargar la tabla
      onClose();   // Cerramos el modal

    } catch (err) {
      // Manejo de errores (ej: nombre duplicado 409, Error servidor 500)
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Error al guardar');
      } else {
        setError('Ocurrió un error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario-container">
      <h3 style={estiloTitulo}>{equipoAEditar ? 'Editar Equipo' : 'Nuevo Equipo'}</h3>

      {error && <p className="alert alert-danger" style={estiloError}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Nombre Equipo:</label>
          <input
            type="text" name="nombre_equipo" value={form.nombre_equipo} onChange={handleChange}
            required maxLength="45"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Pais:</label>
          <input
            type="text" name="pais" value={form.pais} onChange={handleChange}
            required maxLength="45"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Ciudad:</label>
          <input
            type="text" name="ciudad" value={form.ciudad} onChange={handleChange}
            required maxLength="45"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Estadio:</label>
          <input
            type="text" name="estadio" value={form.estadio} onChange={handleChange}
            required maxLength="95"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Fundacion:</label>
          <input
            type="number" name="fundacion" value={form.fundacion} onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Entrenador:</label>
          <input
            type="text" name="entrenador" value={form.entrenador} onChange={handleChange}
            required maxLength="45"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Administrador:</label>
          <input
            type="text" name="administrador" value={datoForaneo} onClick={abrirModal} readOnly
            placeholder="Click para seleccionar un administrador"
            className="form-control"
            style={estiloCampoClic}
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Id Administrador:</label>
          <input
            type="number" name="id_admin" value={form.id_admin} onChange={handleChange}
            required
            className="form-control"
            style={estiloCampoAuto}
          />
        </div>

        <div className="botones-accion" style={estiloBotones}>
          <button type="submit" disabled={loading} className="btn btn-primary" style={estiloBoton}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" onClick={onClose} className="btn btn-secondary" style={estiloBoton}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

// Estilos unificados en los 3 formularios (Equipo, Torneo, Usuario)
const estiloTitulo = {
  borderBottom: '2px solid #00d2ff',
  paddingBottom: '10px',
  marginBottom: '20px',
  color: '#1a1a2e',
  fontWeight: 700
};

const estiloError = {
  marginBottom: '15px'
};

const estiloGrupo = {
  marginBottom: '16px'
};

const estiloLabel = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '6px',
  fontSize: '0.88rem',
  color: '#333'
};

const estiloBotones = {
  marginTop: '20px',
  display: 'flex',
  gap: '10px'
};

const estiloBoton = {
  minWidth: '120px'
};

// Campo de administrador: se indica visualmente que es clicable (abre el selector)
const estiloCampoClic = {
  cursor: 'pointer',
  backgroundColor: '#f8f9fa'
};

// Campo autocompletado a partir del selector de administrador
const estiloCampoAuto = {
  backgroundColor: '#f8f9fa'
};

export default FormularioEquipo;
```

### `src\components\Header.jsx`

```jsx
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
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
            </center>
        </div>
    );
}

export default Header;

```

### `src\components\Login.jsx`

```jsx
import React, { Component } from 'react';
import axios from 'axios';
import { urlApi } from '../services/apirest';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cedula: '',
      contrasena: ''
    };
  }

  manejadorOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state);
    });
  }

  manejadorLogin = () => {
    axios.post(urlApi + 'auth/login', this.state)
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
          console.log(error.response.data);
        } else if (error.request) {
          console.log("No se pudo conectar con el servidor");
          this.props.notificacion("No se pudo conectar con el servidor", 'error');
        } else {
          this.props.notificacion(error.message, 'error');
        }
      });
  }

  render() {
    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input 
                        type="text" 
                        name="cedula"
                        className="form-control form-control-lg" 
                        value={this.state.cedula}
                        onChange={this.manejadorOnChange}
                      />
                      <label className="form-label">Cédula</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input 
                        type="password" 
                        name="contrasena"
                        className="form-control form-control-lg" 
                        value={this.state.contrasena}
                        onChange={this.manejadorOnChange}
                      />
                      <label className="form-label">Contraseña</label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">Forgot password?</a>
                    </p>

                    <button 
                      className="btn btn-outline-light btn-lg px-5" 
                      type="button"
                      onClick={this.manejadorLogin}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>

                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div>

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
```

### `src\components\torneo\FormularioTorneo.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { urlApi } from "../../services/apirest";
//import { SoloLetras } from '../../utils/validaciones';

const FormularioTorneo = ({ torneoAEditar, onClose, onGuardar, notificacion, abrirModal, datoForaneo, idForaneo }) => {

  // 1. Estado inicial del formulario
  const [form, setForm] = useState({
    nombre: '',
    tipo: '',
    pais_sede: '',
    fecha_inicio: '',
    fecha_fin: '',
    estado: '',
    id_admin: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 2. useEffect: Detectar si estamos en modo EDICIÓN
  useEffect(() => {
    if (torneoAEditar) {
      setForm({
        ...torneoAEditar,
        fecha_inicio: torneoAEditar.fecha_inicio
          ? torneoAEditar.fecha_inicio.slice(0, 16)
          : '',
        fecha_fin: torneoAEditar.fecha_fin
          ? torneoAEditar.fecha_fin.slice(0, 16)
          : ''
      });
    } else {
      setForm({
        nombre: '', tipo: '', pais_sede: '', fecha_inicio: '', fecha_fin: '', estado: '', id_admin: ''
      });
    }
  }, [torneoAEditar]);

  useEffect(() => {
    // Si idForaneo tiene un valor real (no es vacío ni "0")
    if (idForaneo && idForaneo !== "0") {
      setForm(estadoAnterior => ({
        ...estadoAnterior,
        id_admin: idForaneo // Actualizamos el ID interno del formulario (llave foránea)
      }));
    }
  }, [idForaneo]);

  // 3. Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // 4. Envío del formulario (Create o Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');
    const method = torneoAEditar ? 'put' : 'post';
    const url = torneoAEditar
      ? urlApi + `torneo/${torneoAEditar.id_torneo}`
      : urlApi + 'torneo';

    try {
      await axios({
        method: method,
        url: url,
        data: form,
        headers: { Authorization: `Bearer ${token}` }
      });

      notificacion(torneoAEditar ? 'Torneo actualizado' : 'Torneo registrado');
      onGuardar();
      onClose();

    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Error al guardar');
      } else {
        setError('Ocurrió un error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario-container">
      <h3 style={estiloTitulo}>{torneoAEditar ? 'Editar Torneo' : 'Nuevo Torneo'}</h3>

      {error && <p className="alert alert-danger" style={estiloError}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Nombre:</label>
          <input
            type="text" name="nombre" value={form.nombre} onChange={handleChange}
            required maxLength="50"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Tipo:</label>
          <input
            type="text" name="tipo" value={form.tipo} onChange={handleChange}
            required maxLength="30"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>País sede:</label>
          <input
            type="text" name="pais_sede" value={form.pais_sede} onChange={handleChange}
            required maxLength="50"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Fecha de inicio:</label>
          <input
            type="datetime-local" name="fecha_inicio" value={form.fecha_inicio} onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Fecha de fin:</label>
          <input
            type="datetime-local" name="fecha_fin" value={form.fecha_fin} onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Estado:</label>
          <input
            type="text" name="estado" value={form.estado} onChange={handleChange}
            required maxLength="20"
            className="form-control"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Administrador:</label>
          <input
            type="text" name="administrador" value={datoForaneo} onClick={abrirModal} readOnly
            placeholder="Click para seleccionar un administrador"
            className="form-control"
            style={estiloCampoClic}
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Id Administrador:</label>
          <input
            type="number" name="id_admin" value={form.id_admin} onChange={handleChange}
            required
            className="form-control"
            style={estiloCampoAuto}
          />
        </div>

        <div className="botones-accion" style={estiloBotones}>
          <button type="submit" disabled={loading} className="btn btn-primary" style={estiloBoton}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" onClick={onClose} className="btn btn-secondary" style={estiloBoton}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

// Estilos unificados en los 3 formularios (Equipo, Torneo, Usuario)
const estiloTitulo = {
  borderBottom: '2px solid #00d2ff',
  paddingBottom: '10px',
  marginBottom: '20px',
  color: '#1a1a2e',
  fontWeight: 700
};

const estiloError = {
  marginBottom: '15px'
};

const estiloGrupo = {
  marginBottom: '16px'
};

const estiloLabel = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '6px',
  fontSize: '0.88rem',
  color: '#333'
};

const estiloBotones = {
  marginTop: '20px',
  display: 'flex',
  gap: '10px'
};

const estiloBoton = {
  minWidth: '120px'
};

// Campo de administrador: se indica visualmente que es clicable (abre el selector)
const estiloCampoClic = {
  cursor: 'pointer',
  backgroundColor: '#f8f9fa'
};

// Campo autocompletado a partir del selector de administrador
const estiloCampoAuto = {
  backgroundColor: '#f8f9fa'
};

export default FormularioTorneo;
```

### `src\components\torneo\Torneo.jsx`

```jsx
import React from "react";
import axios from "axios";
import { urlApi } from "../../services/apirest";
import { confirm } from "../Confirmation"
import FormularioTorneo from "./FormularioTorneo";
import Header from '../Header';
import Usuarios from "../usuarios/Usuarios";
import '../../css/Login.css';

class Torneo extends React.Component {
    //Trabajar código JavaScript
    state = {
        registros: [],
        pagina_actual: 1,
        cadena_busqueda: "",
        token: localStorage.getItem('token'),
        total_paginas: 0,
        limite: 10,
        timeoutBusqueda: null,
        mostrarModal: false,
        torneo_seleccionado: null,
        mostrarModalWin: false
    }

    // Abre/cierra la ventana modal que contiene el listado de Usuarios (admins)
    // para elegir el dato foráneo (id_admin) del torneo
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
            torneo_seleccionado: null
        })
    }

    mostrarModalEditar = (value) => {
        const { EditarVariable } = this.props;
        EditarVariable(value.id_admin, value.nombre_admin);
        this.setState({
            mostrarModal: true,
            torneo_seleccionado: value
        })
    }

    cerrarModal = () => {
        this.setState({mostrarModal: false})
    }

    alGuardar = () => {
        this.cargarDatos(); //Recargar datos
        this.cerrarModal(); //Cerrar ventana modal
    }

    componentDidMount = () => {
        this.cargarDatos();
    }

    paginaSiguiente = () => {
        if (this.state.pagina_actual < this.state.total_paginas) {
            this.setState(
                { pagina_actual: this.state.pagina_actual + 1 },
                () => { this.cargarDatos() }
            )
        }
    }

    paginaAnterior = () => {
        if (this.state.pagina_actual > 1) {
            this.setState(
                { pagina_actual: this.state.pagina_actual - 1 },
                () => { this.cargarDatos() }
            )
        }
    }

    cargarDatos = () => {
        let url = urlApi + "torneo?page=" + this.state.pagina_actual + "&string=" + this.state.cadena_busqueda + "&limit=" + this.state.limite;
        axios
            .get(url, { headers: { 'Authorization': `Bearer ${this.state.token}` } })
            .then(response => {
                this.setState({
                    registros: response.data.data,
                    total_paginas: response.data.totalPage
                })
            })
            .catch(error => {
                const { notificacion } = this.props;
                notificacion(error);
            })
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

    eliminar = async (id, nombre) => {
        if (await confirm('¿Desea eliminar el torneo ' + nombre + '?')) {
            const { notificacion } = this.props;
            const url = urlApi + "torneo/" + id;
            axios
                .delete(url, { headers: { 'Authorization': `Bearer ${this.state.token}` } })
                .then(response => {
                    notificacion("Registro eliminado correctamente");
                    this.cargarDatos();
                })
                .catch(error => {
                    notificacion(error.response.data.error || 'Error al eliminar' + error)
                })
        }
    }

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
                                        <h2 className="fw-bold mb-0">TORNEOS</h2>
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
                                            placeholder="Buscar por nombre del torneo o tipo..." 
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
                                                    <th style={celdaEncabezado('9%')}>TIPO</th>
                                                    <th style={celdaEncabezado('11%')}>PAÍS SEDE</th>
                                                    <th style={celdaEncabezado('13%')}>FECHA INICIO</th>
                                                    <th style={celdaEncabezado('13%')}>FECHA FIN</th>
                                                    <th style={celdaEncabezado('9%')}>ESTADO</th>
                                                    <th style={celdaEncabezado('15%')}>ADMIN</th>
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
                                                                TORNEO NO ENCONTRADO
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    this.state.registros.map((value, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td style={celdaDato()}>{value.id_torneo}</td>
                                                                <td className="fw-bold" style={celdaDato()}>{value.nombre}</td>
                                                                <td style={celdaDato()}>{value.tipo}</td>
                                                                <td style={celdaDato()}>{value.pais_sede}</td>
                                                                <td style={celdaDato()}>
                                                                    {value.fecha_inicio && value.fecha_inicio.split('T')[0]}
                                                                </td>
                                                                <td style={celdaDato()}>
                                                                    {value.fecha_fin && value.fecha_fin.split('T')[0]}
                                                                </td>
                                                                <td style={celdaDato()}>{value.estado}</td>
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
                                                                            onClick={() => this.eliminar(value.id_torneo, value.nombre)}
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
                                                        )
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
                        <div className="modal-content" style={modalStyles.content}>
                            <FormularioTorneo
                                torneoAEditar = {this.state.torneo_seleccionado}
                                onClose = {this.cerrarModal}
                                onGuardar = {this.alGuardar}
                                notificacion = {this.props.notificacion}
                                abrirModal = {this.abrirModal}
                                datoForaneo = {this.props.datoForaneo}
                                idForaneo = {this.props.idForaneo}
                            />
                        </div>
                    </div>
                )}

                {this.state.mostrarModalWin && (
                    <div className="modal-overlay" style={modalStyles.overlay}>
                        <div className="modal-content" style={{ ...modalStyles.content, maxWidth: '900px' }}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="m-0">Seleccionar Administrador</h4>
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-secondary" 
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
                )}
            </section>
        )
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
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
    }
}

export default Torneo;
```

### `src\components\usuarios\FormularioUsuario.jsx`

```jsx
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
        return (
            <section className="vh-100 gradient-custom">
                <div className="container-fluid py-5 h-100" style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-4 p-md-5">
                                    
                                    {this.props.NoModal === true && (
                                        <Header />
                                    )}

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h2 className="fw-bold mb-0">ADMINISTRADORES</h2>
                                        {this.props.NoModal === true && (
                                            <button 
                                                className="btn btn-outline-light btn-lg px-4" 
                                                onClick={this.mostrarModalNuevo}
                                            >
                                                + Nuevo
                                            </button>
                                        )}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg bg-transparent text-white border-secondary" 
                                            placeholder="Buscar por cédula o nombre completo..." 
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
                                                        <td colSpan="7" className="text-center align-middle" style={{ height: '450px' }}>
                                                            <div style={{ 
                                                                color: 'rgba(255,255,255,0.6)', 
                                                                fontSize: '1.1rem'
                                                            }}>
                                                                ADMINISTRADOR NO ENCONTRADO
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    this.state.registros.map((value) => {
                                                        return (
                                                            <tr key={value.id}>
                                                                <td style={celdaDato()}>{value.id}</td>
                                                                <td style={celdaDato()}>{value.cedula}</td>
                                                                <td className="fw-bold" style={celdaDato()}>{value.nombre_completo}</td>
                                                                <td style={celdaDato()}>
                                                                    {value.fecha_nacimiento && value.fecha_nacimiento.split('T')[0]}
                                                                </td>
                                                                <td style={celdaDatoSecundario()}>{value.correo}</td>
                                                                <td style={celdaDato()}>{value.telefono}</td>
                                                                <td className="text-center" style={{ whiteSpace: 'nowrap', verticalAlign: 'middle', padding: '0.65rem 0.6rem' }}>
                                                                    {this.props.NoModal === true ? (
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
                                                        )
                                                    })
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <button 
                                            className="btn btn-outline-light px-4" 
                                            disabled={this.state.pagina_actual <= 1}
                                            onClick={() => this.cambiarPagina(this.state.pagina_actual - 1)}
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
                                            onClick={() => this.cambiarPagina(this.state.pagina_actual + 1)}
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
                        <div className="modal-content" style={modalStyles.content}>
                            <FormularioUsuario
                                usuarioAEditar={this.state.usuario_seleccionado}
                                onClose={this.cerrarModal}
                                onGuardar={this.alGuardar}
                                notificacion={this.props.notificacion}
                            />
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
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
    }
}

export default Usuarios;
```

### `src\components\usuarios\Usuarios.jsx`

```jsx
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
                            <div className="modal-content" style={modalStyles.content}>
                                <FormularioUsuario
                                    usuarioAEditar={this.state.usuario_seleccionado}
                                    onClose={this.cerrarModal}
                                    onGuardar={this.alGuardar}
                                    notificacion={this.props.notificacion}
                                />
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
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
    }
}

export default Usuarios;
```

### `src\css\App.css`

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


/* Contenedor fijo para agrupar las notificaciones */
.notif-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

/* Estilo base de la notificación */
.notif-toast {
  background: #ffffff;
  color: #333333;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 500;
  min-width: 250px;
  border-left: 15px solid #3b82f6; /* Azul por defecto (info) */
  
  /* Estado inicial: invisible y desplazado a la derecha */
  opacity: 0;
  transform: translateX(100%);
  
  /* Transición suave para entrada y salida */
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Clases para animar la entrada */
.notif-toast.show {
  opacity: 1;
  transform: translateX(0);
}

/* Clases para animar la salida (desvanecimiento) */
.notif-toast.fade-out {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}

/* Variantes de color según el tipo */
.notif-toast.success { border-left-color: #10b981; }
.notif-toast.error { border-left-color: #ef4444; }
.notif-toast.warning { border-left-color: #f59e0b; }


.modal {
    display: block; /* Mostrar el modal */
    position: fixed;
    /* z-index: 1; */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  }
  
  /* Estilos para el contenido del modal */
  .contenido-modal {
    background-color: #fefefe;
    margin: 1% auto; /* Centrar vertical y horizontalmente */
    padding: 20px;
    border: 1px solid #888;
    width: 90%; /* Ancho del contenido */
    height: 97%;
  }
  
  /* Estilos para el botón de cierre */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
```

### `src\css\index.css`

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

### `src\css\Login.css`

```css
.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
```

### `src\index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

### `src\logo.svg`

```plaintext
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
```

### `src\reportWebVitals.js`

```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

### `src\services\apirest.js`

```javascript
export const urlApi = "http://localhost:5000/api/"
```

### `src\setupTests.js`

```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

