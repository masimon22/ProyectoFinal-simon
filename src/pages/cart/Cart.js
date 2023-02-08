import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import swal from "sweetalert";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import "./cart.css";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({});
  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
      items: cart.map((product) => {
        const { name, price, id } = product;
        return { name, price, id };
      }),

      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    });
  }, []);

  if (cart.length === 0) {
    return <h1>No hay productos en tu carrito</h1>;
  }

  const createOrder = (event) => {
    event.preventDefault();
    

    const currentOrder = {
      ...order,
      buyer: formValue,
    };

    const querySnapshot = collection(db, "orders");
    addDoc(querySnapshot, currentOrder)
      .then((response) => {
        console.log(response.id);
        updateStockProducts();
        swal({
          title: "Orden creada con éxito!",
          text: `su numero de Id es: ${response.id}`,
          icon: "success",
          button: "Aceptar",
        });
      })
      .catch((error) => console.log(error));
  };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "items", product.id);
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          console.log("el producto actualizo su stock");
        })
        .catch((error) => console.log(error));
    });
    clear();
  };

  const handleInput = (event) => {
    console.log(event.target.value);
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="cartContainer">
      <div className="cart">
        <ul>
          {cart.map((product) => (
            <li className="cartLi" key={product.id}>
              <div className="productsCart">
                <img
                  className="imageCart"
                  alt={product.id}
                  src={`/images/${product.image}`}
                />
                <h3> {product.name}</h3>
                <h4>{product.category}</h4>
                <h4>{product.quantity}</h4>
                <h4>$ {product.price}</h4>

                <button onClick={() => removeItem(product.id)}>
                  Elimiar producto
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h3>El total de tu compra es: ${order.total}.-</h3>
        </div>
        <div>
          <button className="cartButton" onClick={() => clear()}>
            Vaciar carrito
          </button>
        </div>
      </div>
      <div className="cartForm">
        <form className="form">
          <input
            name="name"
            className="formInput"
            type="text"
            placeholder="Name"
            value={formValue.name}
            onChange={handleInput}
          />
          <input
            name="phone"
            className="formInput"
            type="text"
            placeholder="Phone"
            value={formValue.phone}
            onChange={handleInput}
          />
          <input
            name="email"
            className="formInput"
            type="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleInput}
          />
          <div>
            <button className="cartButton" onClick={createOrder}>
              Crear orden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
