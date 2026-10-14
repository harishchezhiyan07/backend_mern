
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Mens
      </NavLink>

      <NavLink to="/kids" className="nav-link">
        Kids
      </NavLink>

      <NavLink to="/women" className="nav-link">
        Women
      </NavLink>

      <NavLink to="/allsports" className="nav-link">
        All Sports
      </NavLink>
    </nav>
  );
};

export default Navbar;