import React, { useState } from 'react';
import Campo from '../campo/Campo';
import Boton from '../boton/Boton';
import "./NuevoVideo.css";
import ListaCategoria from '../listacategoria/ListaCategoria';

const NuevoVideo = ({ regisrarNuevoVideo, categorias, crearNuevaCategoria }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const [visualizacion] = useState('100k Visualizaciones');
  const [like] = useState(false);
  const [favorito] = useState(false);
  
 
  const [nombre, actualizarNombre] = useState("")
  const [color, actualizarColor] = useState("#000000")

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (titulo && categoria && imagen && video) {
       
      const nuevoVideo = {
        titulo,
        categoria,
        imagen,
        video,
        visualizacion,
        like,
        favorito
      };

      regisrarNuevoVideo(nuevoVideo);

   
      Swal.fire({
        icon: 'success',
        title: '¡Video registrado!',
        text: 'El video se ha registrado correctamente.',
        confirmButtonText: 'OK'
      }).then(() => {
    
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
      });
    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos.',
        confirmButtonText: 'OK'
      });
    }
  };

  const manejarEnvioCategoria = (e) => {
    e.preventDefault();

    if (nombre && color) { 
      const nuevaCategoria = {
        nombre,
        color
      };

     
      crearNuevaCategoria(nuevaCategoria);

      Swal.fire({
        icon: 'success',
        title: '¡Categoría creada!',
        text: 'La nueva categoría se ha creado correctamente.',
        confirmButtonText: 'OK'
      }).then(() => {
        actualizarNombre('');
        actualizarColor('#000000');  
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos.',
        confirmButtonText: 'OK'
      });
    }
  };
  return (
    <section className="registration">
      <form onSubmit={manejarEnvio}>
        <h3>Rellena el formulario para crear el video.</h3>
        <Campo
          titulo="Título"
          placeholder="Ingresar Título"
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Campo
          titulo="Imagen"
          placeholder="Ingresar URL de la Imagen"
          required
          valor={imagen}
          actualizarValor={setImagen}
        />
        <Campo
          titulo="Video"
          placeholder="Ingresar URL del Video"
          required
          valor={video}
          actualizarValor={setVideo}
        />
        <ListaCategoria
          categorias={categorias}
          valor={categoria}
          actualizarValor={setCategoria}
        />
        <Boton>Crear Video</Boton>
      </form>

      <form onSubmit={manejarEnvioCategoria}>
        <h3>Crea una nueva categoría</h3>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar Categoría"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}

        />
        <Boton type="submit">Crear Categoría</Boton>
      </form>
    </section>
  );
};

export default NuevoVideo;