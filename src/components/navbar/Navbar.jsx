import { BiSolidPlaneAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <BiSolidPlaneAlt />
          <span>Roomaty</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
