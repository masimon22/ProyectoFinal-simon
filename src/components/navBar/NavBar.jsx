import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">Attrezzo</div>
      <div className="linksContainer">
        <ul className="links">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/categoria/Velas"
            >
              Velas
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/categoria/Ceramica"
            >
              Ceramica
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/categoria/Deco"
            >
              Deco
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="carrito">
        <CartWidget /> 1
      </div>
    </div>
  );
};

export default NavBar;
