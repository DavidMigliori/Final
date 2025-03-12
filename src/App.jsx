import { useState, useEffect } from "react";
import Personaje from "./Componentes/Personaje";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const respuesta = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${busqueda}`
      );
      const data = await respuesta.json();
      setPersonajes(data.results || []);
    };

    obtenerPersonajes();
  }, [busqueda]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Buscar personajes"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="personajes-lista">
        {personajes.map((personaje) => (
          <Personaje
            key={personaje.id}
            nombre={personaje.name}
            imagen={personaje.image}
            estado={personaje.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;