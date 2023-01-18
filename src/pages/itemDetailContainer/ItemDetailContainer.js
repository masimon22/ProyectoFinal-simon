import "./itemDetailContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import Productos from "../../components/productos/Productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  

  const getProduct = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = Productos.find((p) => p.id === id);
      setTimeout(() => {
        resolve(productoFiltrado);
        console.log(productoFiltrado);
      }, 2000);
    });
  };
  useEffect(() => {
    getProduct(id)
      .then((res) => {
        console.log(res);
        setItem(res);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
