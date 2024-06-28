import React from 'react';
import "./ListaCategoria.css";

const ListaCategoria = ({ categorias, valor, actualizarValor }) => {
  if (!categorias) {
    categorias = []; 
  }

  return (
    <div className="lista-categoria">
      <label>Categoria</label>
      <select name="categoria" id="categoria" value={valor} onChange={(e) => actualizarValor(e.target.value)}>
        <option value="">Seleccionar Categoria</option>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>{categoria}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaCategoria; 