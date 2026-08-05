import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Usuarios from './components/usuarios/Usuarios';
import Equipos from './components/equipo/Equipos';
import Torneo from './components/torneo/Torneo';
import RutaProtegida from './components/RutaProtegida';

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
            <Route path='/usuarios' element={<RutaProtegida><Usuarios notificacion={this.notificacion} NoModal={this.state.NoModal} /></RutaProtegida>} />
            <Route path='/equipos' element={<RutaProtegida><Equipos notificacion={this.notificacion} EditarVariable={this.EditarVariable} idForaneo={this.state.idForaneo} datoForaneo={this.state.datoForaneo} /></RutaProtegida>} />
            <Route path='/torneo' element={<RutaProtegida><Torneo notificacion={this.notificacion} EditarVariable={this.EditarVariable} idForaneo={this.state.idForaneo} datoForaneo={this.state.datoForaneo} /></RutaProtegida>} />
            <Route path='*' element={<Login notificacion={this.notificacion} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;