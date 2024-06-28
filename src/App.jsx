import React, { useState, useEffect } from 'react';
import Header from "../src/components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NuevoVideo from './components/nuevoVideo/NuevoVideo';
import Favorito from './favorito/Favorito';
import Footer from './pages/footer/Footer';
 
 
function App() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [destacados, setDestacados] = useState([]);
 const [favoritos, setFavoritos] = useState([])
 const [likes, setLikes] = useState([]);

 useEffect(() => {
  // Carga los datos desde json-server en Vercel
  fetch('https://backendalura.vercel.app/videos')
    .then(response => response.json())
    .then(data => {
      setVideos(data);
      const categoriasUnicas = Array.from(new Set(data.map(video => video.categoria)));
      setCategorias(categoriasUnicas);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);


const regisrarNuevoVideo = (nuevoVideo) => {
  fetch('https://backendalura.vercel.app/videos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoVideo)
  })
  .then(response => response.json())
  .then(data => setVideos(prevVideos => [...prevVideos, data]))
  .catch(error => console.error('Error adding video:', error));
};

const eliminarVideo = (id) => {
  fetch(`https://backendalura.vercel.app/videos/${id}`, {
    method: 'DELETE'
  })
  .then(() => setVideos(prevVideos => prevVideos.filter(video => video.id !== id)))
  .catch(error => console.error('Error deleting video:', error));
};

const actualizarVideo = (videoActualizado) => {
  fetch(`https://backendalura.vercel.app/videos/${videoActualizado.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(videoActualizado)
  })
  .then(response => response.json())
  .then(data => {
    setVideos(prevVideos => prevVideos.map(video => 
      video.id === videoActualizado.id ? data : video
    ));
  })
  .catch(error => console.error('Error updating video:', error));
};

const crearNuevaCategoria = (nuevaCategoria) => {
  if (!categorias.includes(nuevaCategoria.nombre)) {
    fetch('https://backendalura.vercel.app/categorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaCategoria)
    })
    .then(response => response.json())
    .then(data => {
      setCategorias(prevCategorias => [...prevCategorias, data.nombre]);
    })
    .catch(error => console.error('Error adding category:', error));
  }
};

  const marcarDestacado = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, destacado: true } : video
      )
    );
    setDestacados(prevDestacados => {
      const nuevosDestacados = [...prevDestacados, id];
      console.log('Videos destacados:', nuevosDestacados);
      return nuevosDestacados;
    });
  };

  const desmarcarDestacado = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, destacado: false } : video
      )
    );
    setDestacados(prevDestacados => {
      const nuevosDestacados = prevDestacados.filter(videoId => videoId !== id);
      console.log('Videos destacados:', nuevosDestacados);
      return nuevosDestacados;
    });
  };

  const marcarFavorito = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, favorito: true } : video
      )
    );
    setFavoritos(prevFavoritos => {
      const nuevosFavoritos = [...prevFavoritos, id];
      console.log('Videos Favoritos:', nuevosFavoritos);
      return nuevosFavoritos;
    });
  };

  const desmarcarFavorito = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, favorito: false } : video
      )
    );
    setFavoritos(prevFavoritos => {
      const nuevosFavoritos = prevFavoritos.filter(videoId => videoId !== id);
      console.log('Videos favoritos:', nuevosFavoritos);
      return nuevosFavoritos;
    });
  };

  

  const manejarLike = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, like: !video.like } : video
      )
    );
    setLikes(prevLikes => {
      if (prevLikes.includes(id)) {
        return prevLikes.filter(videoId => videoId !== id);
      } else {
        return [...prevLikes, id];
      }
    });
  };

  return (
    <>
      <Router>
        <Header  />
        <Routes>
          <Route path='/' element={
            
              <Home 
                videos={videos} 
                eliminarVideo={eliminarVideo} 
                actualizarVideo={actualizarVideo} 
                categorias={categorias}
                marcarDestacado={marcarDestacado}
                desmarcarDestacado={desmarcarDestacado}
                destacados={destacados}
                favoritos = {favoritos}
                marcarFavorito = {marcarFavorito}
                 desmarcarFavorito = {desmarcarFavorito}
                 manejarLike = {manejarLike}
                 likes = {likes}
                />
            
          } />
          <Route path='/new-video' element={<NuevoVideo 
          regisrarNuevoVideo={regisrarNuevoVideo} 
          categorias={categorias}
          crearNuevaCategoria = {crearNuevaCategoria}
          />} />

        <Route path='/favorites' element={<Favorito
        favoritos = {favoritos}
        videos={videos}
        marcarFavorito = {marcarFavorito}
        desmarcarFavorito = {desmarcarFavorito}
        actualizarVideo = {actualizarVideo}
        manejarLike = {manejarLike}
        />} />
 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;