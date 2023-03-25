import "../components/assets/navbar.css";
import { NavLink } from "react-router-dom";
import Pokeball from "./pokeball";

export default function Navbar() { 
  const setActivo = ({ isActive }) => (isActive ? "activo" : undefined)
  return (
    <nav className="navbar">
      <div className="contenedor"> 
        <div>
          <NavLink to="/" className={setActivo}> Home  </NavLink> |
          <NavLink to="/Pokemones"  className={setActivo}> Pokemones </NavLink></div>
        <Pokeball/>
      </div>
    </nav>
  );
}