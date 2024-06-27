import "./Banner.css"
import player_img from "../../assets/player.png"
import VideoDestacado from "../videodestacado/VideoDestacado";

const Banner = ({ destacados, videos }) => {
  const videosDestacados = videos.filter(video => destacados.includes(video.id));
  
  return (
    <section id="home">
      {videosDestacados.length > 0 ? (
        <div className="destacados-container">
          <h2>Videos Destacados</h2>
          <div className="destacados-scroll">
            {videosDestacados.map(video => (
              <VideoDestacado key={video.id} video={video} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="text-container">
            <div className="btn">
              <a href="#" className="blue">Learn More</a>
              <a href="#" className="yellow">Visit Courses</a>
            </div>
            <h2>Challenge React</h2>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
          </div>
          <div className="image-container">
            <img src={player_img} alt="Player" />
          </div>
        </>
      )}
    </section>
  );
}

export default Banner;