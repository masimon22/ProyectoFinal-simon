import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        
        <NavLink  to="/">
        <img className="attrezzo" src="/images/atrrlogo1.png" alt="imagen logo" />
          </NavLink>
      </div>
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
              to="/categoria/velas"
            >
              Velas
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/categoria/ceramica"
            >
              Ceramica
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/categoria/deco"
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
