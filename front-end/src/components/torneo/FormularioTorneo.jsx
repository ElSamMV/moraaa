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
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Tipo:</label>
          <input
            type="text" name="tipo" value={form.tipo} onChange={handleChange}
            required maxLength="30"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>País sede:</label>
          <input
            type="text" name="pais_sede" value={form.pais_sede} onChange={handleChange}
            required maxLength="50"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Fecha de inicio:</label>
          <input
            type="datetime-local" name="fecha_inicio" value={form.fecha_inicio} onChange={handleChange}
            required
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Fecha de fin:</label>
          <input
            type="datetime-local" name="fecha_fin" value={form.fecha_fin} onChange={handleChange}
            required
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group" style={estiloGrupo}>
          <label style={estiloLabel}>Estado:</label>
          <input
            type="text" name="estado" value={form.estado} onChange={handleChange}
            required maxLength="20"
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

export default FormularioTorneo;