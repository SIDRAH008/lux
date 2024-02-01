import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import "./index.css";
import logo from "./lux.png";
const Navbar = () => {
  return (
    <div className="Header">
      <div className="leftnav">
        <img src={logo} alt="" />
      </div>
      <div className="navlinksBar">
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavDropdown title="OFF PLAN" id="basic-nav-dropdown">
        <NavLink to="/properties" className="dropdown-item">
          View Properties
        </NavLink>
        {/* Add more dropdown items as needed */}
      </NavDropdown>
      
        <NavLink to="/secendory" className="navlinks">
         Secendary
        </NavLink>
        <NavLink to="/service" className="navlinks">
          Services
        </NavLink>
        <NavLink to="/contact" className="navlinks">
          Contact Us
        </NavLink>
        <NavLink to="/mortgage" className="navlinks">
          Mortgages
        </NavLink>
        <NavLink to="/login" className="navlinks">
          Login
        </NavLink>
        <NavLink to="/signup" className="navlinks">
          Sigup
        </NavLink>
        <NavLink to="/chatbot" className="navlinks">
          Chatbot
        </NavLink>
       
        <NavLink to="/createlisting" className="navlinks">
          Add Your Property
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
