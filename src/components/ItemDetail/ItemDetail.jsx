import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ item }) => {
  const {addItem } = useContext(cartContext);
  const {clear} = useContext(cartContext);
  const [contador, setContador] = useState(0);
  

  return (
    <div className="containerDetail">
      <img className="containerDetailImagen" src={`/images/${item.imagenId}`} alt={item.id} />

      <article>
        <h2>Cantidad de productos en tu carrito: {contador}</h2>
        <h2>{item.nombre}</h2>
        <h3>{item.categoriaId}</h3>
        <section>
          <h3>${item.precio}</h3>
        </section>

        <section>
          <p>{item.descripcion}</p>
        </section>
        <section>
          <p>{item.stock}</p>
        </section>
        <ItemCount
          contador={contador}
          actualizaValor={setContador}
          stock={item.stock}
        />
      </article>
      <button onClick={()=> addItem(item, contador)}>Agregar al Carrito</button>
      <button onClick={()=> clear(item, contador)}>Vaciar Carrito</button>
    </div>
  );
};

export default ItemDetail;
