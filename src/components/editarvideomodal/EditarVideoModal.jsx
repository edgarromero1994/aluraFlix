import React, { useState } from "react";
import Campo from "../campo/Campo";
import Boton from "../boton/Boton";
import "./EditarVideoModal.css";
import ListaCategoria from "../listacategoria/ListaCategoria";

const EditarVideoModal = ({ cerrarModal, video, actualizarVideo, categorias }) => {
  const [titulo, setTitulo] = useState(video ? video.titulo : '');
  const [imagen, setImagen] = useState(video ? video.imagen : '');
  const [videoUrl, setVideoUrl] = useState(video ? video.video : '');
  const [categoria, setCategoria] = useState(video ? video.categoria : '');


  const manejarEnvio = (e) => {
    e.preventDefault();

    if (titulo && imagen && videoUrl && categoria) {
      const videoActualizado = {
        ...video,
        titulo,
        imagen,
        video: videoUrl,
        categoria,
      };
      actualizarVideo(videoActualizado);

      // Mostrar mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Video actualizado!',
        text: 'El video se ha actualizado correctamente.',
        confirmButtonText: 'OK'
      }).then(() => {
        cerrarModal();
      });
    } else {
      // Mostrar mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar el video',
        confirmButtonText: 'OK'
      });
    }
  };

  const manejarCerrarModal = () => {
    cerrarModal();
  };


  return (
    <div className="modal-overlay" onClick={cerrarModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <section className="registration">
          <form onSubmit={manejarEnvio}>
            <span className="cerrar-modal" onClick={cerrarModal}>X</span>
            <h3>Editar Video</h3>
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
              valor={videoUrl}
              actualizarValor={setVideoUrl}
            />
            <ListaCategoria
              categorias={categorias}
              valor={categoria}
              actualizarValor={setCategoria}
            />
            <div className="botones-container">
              <Boton className="blue" type="submit">Guardar Cambios</Boton>
              <button className="yellow" onClick={manejarCerrarModal}>Cancelar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditarVideoModal;