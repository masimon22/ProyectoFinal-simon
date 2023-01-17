import "./item.css";

const Item = ({ producto }) => {
  return (
    <li className="cards">
      <img src={producto.imagen} alt={producto.nombre} width="200px" />
      <div className="cardsInfo">
        <h2>{producto.nombre}</h2>
        <h4>{producto.categoria}</h4>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
      </div>
    </li>
  );
};

export default Item;
