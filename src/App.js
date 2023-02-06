import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

    
  );
}

export default App;
