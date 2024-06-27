import React from 'react';
import CardVideo from "../video/CardVideo";
import "./ListaVideo.css";

const Categoria = ({ videos, eliminarVideo, actualizarVideo, abrirModalEditar, marcarDestacado, desmarcarDestacado, destacados, favoritos, marcarFavorito, desmarcarFavorito }) => {
  const videosByCategory = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  return (
    <div className="video-list">
      {Object.keys(videosByCategory).map(category => (
        <div key={category} className="category-section">
          <h1 style={{ color: videosByCategory[category][0].color }}>{category}</h1>
          <div className="box-card">
            {videosByCategory[category].map(video => (
              <CardVideo 
                key={video.id} 
                video={video}
                eliminarVideo={eliminarVideo} 
                actualizarVideo={actualizarVideo}
                abrirModalEditar={abrirModalEditar}
                marcarDestacado = {marcarDestacado}
                desmarcarDestacado = {desmarcarDestacado}
                destacados = {destacados}
                desmarcarFavorito = {desmarcarFavorito}
                marcarFavorito= {marcarFavorito}
                favoritos = {favoritos}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categoria;