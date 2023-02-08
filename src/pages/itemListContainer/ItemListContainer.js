import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greating }) => {
  const [products, setProducts] = useState([]);

  const { categoria } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items");
    const querySnapshot = categoria
      ? query(queryBase, where("categoriaId", "==", categoria))
      : queryBase;

    getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [categoria]);

  return (
    <>
    <div className="saludo">
      <h1>
        Bienvenidos al Ecommerce de Attrezzo
      </h1>
    </div>
    <div className="saludo">
      {greating}
      <ItemList productos={products} />
    </div>
    </>
    
  );
};

export default ItemListContainer;
