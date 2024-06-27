import React from 'react';
import "./Boton.css";

const Boton = ({ children }) => {
  return (
    <button className="boton">{children}</button>
  );
}

export default Boton;