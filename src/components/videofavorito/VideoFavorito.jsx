import React, { useState } from 'react'
import ReactPlayer from 'react-player';
 

const VideoFavorito = ({video, marcarFavorito, desmarcarFavorito, actualizarVideo}) => {
  
  const [playing, setPlaying] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null); 

  const handleLike = () => {
    const actualizado = { ...video, like: !video.like };
    actualizarVideo(actualizado);
  }
  const handleMarcarFavorito = () => {
    marcarFavorito(video.id);
   }
  
   const handleDesmarcarFavorito  = () => {
    desmarcarFavorito(video.id);
   }
 
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
   
  )
}

export default VideoFavorito