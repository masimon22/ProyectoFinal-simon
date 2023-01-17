import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="item/:id" element ={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

    // <div>

    //   <ItemListContainer greating = 'Bienvenido al Ecommerce de ATTREZZO'/>
    // </div>
  );
}

export default App;
