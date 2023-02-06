import Item from "../item/Item";
import "./itemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <ul className="cardsContainer">
      {productos.map((producto) => (
        <Link to={`/item/${producto.id}`} key={producto.id}>
          <Item  producto={producto} />
        </Link>
      ))}
    </ul>
  );
};

export default ItemList;

