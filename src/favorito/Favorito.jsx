import React, { useState } from 'react';
import VideoFavorito from '../components/videofavorito/VideoFavorito';
import './Favorito.css';
import imagen_vacio from '../assets/favorito.svg';

const Favorito = ({ favoritos, videos, marcarFavorito, desmarcarFavorito, actualizarVideo }) => {
  const videosFavoritos = videos.filter(video => favoritos.includes(video.id));
  const [favoritosVacios] = useState(videosFavoritos.length === 0);

  return (
    <div className="video-list">
      <h1 className='video-favotire-title'>Videos Favoritos</h1>
      
      {favoritosVacios ? (
        <img src={imagen_vacio} alt="No hay videos favoritos" /> 
      ) : (
        <div className="box-card">
          {videosFavoritos.map(video => (
            <VideoFavorito 
              key={video.id} 
              video={video} 
              marcarFavorito={marcarFavorito}
              desmarcarFavorito={desmarcarFavorito}
              actualizarVideo={actualizarVideo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorito;