import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ item }) => {
  const {addItem } = useContext(cartContext);
  const [contador, setContador] = useState(0);
  

  return (
    <div className="containerDetail">
      <img className="containerDetailImagen" src={`/images/${item.imagenId}`} alt={item.id} />

      <article className="cardItemDetail">
        <h2>{item.nombre}</h2>
        <h3>{item.categoriaId}</h3>
        <section>
          <h3>${item.precio}</h3>
        </section>

        <section>
          <p>{item.descripcion}</p>
        </section>
        <section>
          <p>Stock: {item.stock}</p>
        </section>
        <ItemCount
          contador={contador}
          actualizaValor={setContador}
          stock={item.stock}
        />
        <br></br>
      <button onClick={()=> addItem(item, contador)}>Agregar al Carrito</button>
      </article>
    </div>
  );
};

export default ItemDetail;
