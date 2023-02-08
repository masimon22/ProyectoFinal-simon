import "./itemDetailContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "items", id);

    getDoc(querySnapshot)
      .then((response) => {
        setItem({ id: response.id, ...response.data() });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
