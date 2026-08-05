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
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Pais:</label>
          <input
            type="text" name="pais" value={form.pais} onChange={handleChange}
            required maxLength="45"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Ciudad:</label>
          <input
            type="text" name="ciudad" value={form.ciudad} onChange={handleChange}
            required maxLength="45"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Estadio:</label>
          <input
            type="text" name="estadio" value={form.estadio} onChange={handleChange}
            required maxLength="95"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Fundacion:</label>
          <input
            type="number" name="fundacion" value={form.fundacion} onChange={handleChange}
            required
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Entrenador:</label>
          <input
            type="text" name="entrenador" value={form.entrenador} onChange={handleChange}
            required maxLength="45"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Administrador:</label>
          <input
            type="text" name="administrador" value={datoForaneo} onClick={abrirModal} readOnly
            placeholder="Click para seleccionar un administrador"
            className="form-control bg-transparent text-white border-secondary"
            style={estiloCampoClic}
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Id Administrador:</label>
          <input
            type="number" name="id_admin" value={form.id_admin} readOnly
            required
            className="form-control bg-transparent text-white border-secondary"
            style={estiloCampoAuto}
          />
        </div>

        <div className="botones-accion" style={estiloBotones}>
          <button type="submit" disabled={loading} className="btn btn-outline-light" style={estiloBoton}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" onClick={onClose} className="btn btn-outline-secondary" style={estiloBoton}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

// Estilos unificados en los 3 formularios (Equipo, Torneo, Usuario)
const estiloTitulo = {
  marginBottom: '20px',
  color: '#fff',
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
  color: 'rgba(255,255,255,0.85)'
};

const estiloBotones = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between'
};

const estiloBoton = {
  minWidth: '120px'
};

// Campo de administrador: se indica visualmente que es clicable (abre el selector)
const estiloCampoClic = {
  cursor: 'pointer',
  backgroundColor: 'rgba(255,255,255,0.08)'
};

// Campo autocompletado a partir del selector de administrador
const estiloCampoAuto = {
  backgroundColor: 'rgba(255,255,255,0.08)'
};

export default FormularioEquipo;