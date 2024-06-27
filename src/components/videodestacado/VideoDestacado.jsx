import "./VideoDestacado.css"

const VideoDestacado = ({video}) => {
  return (
    <div className="card-destacado">
      <img src={video.imagen} alt={video.titulo} />
      <div className="details">
        <span>{video.visualizacion}</span>
        <h6>{video.titulo}</h6>
      </div>
    </div>
  )
}

export default VideoDestacado