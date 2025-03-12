function Personaje({ nombre, imagen, estado }) {
    return (
      <div className="personaje-card">
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <p><strong>Estado:</strong> {estado}</p>
      </div>
    );
  }
  
  export default Personaje;