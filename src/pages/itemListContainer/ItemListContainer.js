import "./ItemListContainer.css";
import ItemCount from "../../components/itemCount/ItemCount";
import Productos from "../../components/productos/Productos";
import { useEffect, useState } from "react";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greating }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {categoria} = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });
  useEffect(() => {
    getProducts
      .then((response) => {
        // console.log(response);
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);

useEffect(()=>{
  if (categoria) {
    const filterProducts = products.filter((producto)=>producto.categoria === categoria);
    setFilteredProducts(filterProducts);
  }

  
}, [categoria])

  return (
    <div className="saludo">
      {greating}
      <ItemCount />
      <ItemList productos= {categoria ? filteredProducts : products}/>

     
    </div>
  );
};

export default ItemListContainer;
