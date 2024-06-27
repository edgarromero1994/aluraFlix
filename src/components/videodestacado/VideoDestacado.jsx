import { useState } from "react";
import "./VideoDestacado.css"
import ReactPlayer from 'react-player';

const VideoDestacado = ({video}) => {
  const [playing, setPlaying] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null); 

   const handlePlayVideo = () => {
    if (video.id === currentPlayingId && playing) {
      setPlaying(false);  
    } else {
      setCurrentPlayingId(video.id);  
      setPlaying(true);  
    }
  };

  return (
    <div className="card-destacado">
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
    </div>
  )
}

export default VideoDestacado