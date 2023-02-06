import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    let newCart;
    let product = cart.find((prod) => prod.id === item.id);
    if (product) {
      product.quantity += quantity;
      if(product.quantity > product.stock){
        alert("No hay stock disponible")
        return;
      }
      newCart = [...cart];
    } else {
      product = {
        id: item.id,
        name: item.nombre,
        price: item.precio,
        descripcion: item.descripcion,
        quantity: quantity,
        category: item.categoriaId,
        image: item.imagenId,
        stock: item.stock,
      };
      newCart = [...cart, product];
    }
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
    console.log(cart);
  };
  const removeItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
