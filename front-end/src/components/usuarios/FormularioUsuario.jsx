import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { urlApi } from "../../services/apirest";

const FormularioUsuario = ({ usuarioAEditar, onClose, onGuardar, notificacion }) => {

  // 1. Estado inicial del formulario
  const [form, setForm] = useState({
    cedula: '',
    nombre_completo: '',
    fecha_nacimiento: '',
    correo: '',
    telefono: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 2. Detectar si estamos en modo EDICIÓN
  useEffect(() => {
    if (usuarioAEditar) {
      setForm({
        ...usuarioAEditar,
        // El input type="date" solo acepta YYYY-MM-DD, la BD puede devolver fecha ISO completa
        fecha_nacimiento: usuarioAEditar.fecha_nacimiento
          ? usuarioAEditar.fecha_nacimiento.split('T')[0]
          : ''
      });
    } else {
      setForm({
        cedula: '', nombre_completo: '', fecha_nacimiento: '', correo: '', telefono: ''
      });
    }
  }, [usuarioAEditar]);

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

    const method = usuarioAEditar ? 'put' : 'post';
    const url = usuarioAEditar
      ? urlApi + `usuarios/${usuarioAEditar.id}` // Put
      : urlApi + 'usuarios';                     // Post

    try {
      await axios({
        method: method,
        url: url,
        data: form,
        headers: { Authorization: `Bearer ${token}` }
      });

      notificacion(usuarioAEditar ? 'Administrador actualizado' : 'Administrador registrado');
      onGuardar(); // Recarga la tabla en el componente padre
      onClose();   // Cierra el modal

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
      <h3>{usuarioAEditar ? 'Editar Administrador' : 'Nuevo Administrador'}</h3>

      {error && <p className="alert alert-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Cédula:</label>
          <input
            type="text" name="cedula" value={form.cedula} onChange={handleChange}
            required maxLength="10"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group mb-3">
          <label>Nombre completo:</label>
          <input
            type="text" name="nombre_completo" value={form.nombre_completo} onChange={handleChange}
            required maxLength="100"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group mb-3">
          <label>Fecha de nacimiento:</label>
          <input
            type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={handleChange}
            required
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group mb-3">
          <label>Correo:</label>
          <input
            type="email" name="correo" value={form.correo} onChange={handleChange}
            required maxLength="100"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="form-group mb-3">
          <label>Teléfono:</label>
          <input
            type="text" name="telefono" value={form.telefono} onChange={handleChange}
            maxLength="15"
            className="form-control bg-transparent text-white border-secondary"
          />
        </div>

        <div className="botones-accion d-flex justify-content-between" style={{ marginTop: '15px' }}>
          <button type="submit" disabled={loading} className="btn btn-outline-light px-4">
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" onClick={onClose} className="btn btn-outline-secondary px-4">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;