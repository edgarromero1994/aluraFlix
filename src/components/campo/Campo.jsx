// Campo.js
import React from 'react';
import './Campo.css';

const Campo = ({ titulo, placeholder, required, valor, actualizarValor }) => {
  const placeholderModificado = `${placeholder}...`;

  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <div className="campo">
      <label htmlFor="">{titulo}</label>
      <input
        type="text"
        placeholder={placeholderModificado}
        required={required}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo;