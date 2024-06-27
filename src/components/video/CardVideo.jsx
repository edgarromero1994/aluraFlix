import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "./CardVideo.css";

const CardVideo = ({
  video,
  eliminarVideo,
  actualizarVideo,
  abrirModalEditar,
  marcarDestacado,
  desmarcarDestacado,
  marcarFavorito,
  desmarcarFavorito,
}) => {
  const [playing, setPlaying] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null); 
  

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarVideo(id);
        Swal.fire(
          'Eliminado!',
          'El video ha sido eliminado.',
          'success'
        )
      }
    })
  }

  const handleLike = () => {
    const actualizado = { ...video, like: !video.like };
    actualizarVideo(actualizado);
  }

  const handleMarcarFavorito = () => {
    marcarFavorito(video.id);
  }

  const handleDesmarcarFavorito = () => {
    desmarcarFavorito(video.id);
  }

  const handleDestacarChange = (e) => {
    if (e.target.checked) {
      marcarDestacado(video.id);
    } else {
      desmarcarDestacado(video.id);
    }
  };

  const handlePlayVideo = () => {
    if (video.id === currentPlayingId && playing) {
      setPlaying(false);  
    } else {
      setCurrentPlayingId(video.id);  
      setPlaying(true);  
    }
  };

  return (
    <div className="card">
      {!playing ? (
        <img
          src={video.imagen}
          alt={video.titulo}
          onClick={handlePlayVideo}
        />
      ) : (
        <ReactPlayer
          url={video.video}
          width="100%"
          height="100%"
          controls={true}
          playing={playing}
          onEnded={() => setPlaying(false)} // Pausa el video al finalizar la reproducción
        />
      )}
      <div className="details">
        <span>{video.visualizacion}</span>
        <h6>{video.titulo}</h6>
        <div className="icon-card">
          <label className="destacar-label">
            <input
              type="checkbox"
              checked={video.destacado}
              onChange={handleDestacarChange}
            />
            {video.destacado ? 'Destacado' : 'Destacar'}
          </label>
          <i className="ri-delete-bin-5-fill" onClick={() => handleDelete(video.id)}></i>
          <i className="ri-pencil-fill" onClick={() => abrirModalEditar(video)}></i>
        </div>
      </div>
      <div className="icon-fav-like">
        <i
          className={`ri-heart-${video.like ? 'fill' : 'line'} ${video.like ? 'like-true' : 'like-false'}`}
          onClick={handleLike}
        ></i>
        <i
          className={`ri-bookmark-${video.favorito ? 'fill' : 'line'} ${video.favorito ? 'favorito-true' : 'favorito-false'}`}
          onClick={video.favorito ? handleDesmarcarFavorito : handleMarcarFavorito}
        ></i>
      </div>
    </div>
  );
}

export default CardVideo;