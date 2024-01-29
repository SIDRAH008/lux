import { NavLink } from "react-router-dom";
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
        <NavLink to="/properties" className="navlinks">
        OFF PLAN
        </NavLink>
        <NavLink to="/secendory" className="navlinks">
         Secendory
        </NavLink>
        <NavLink to="/service" className="navlinks">
          Services
        </NavLink>
        <NavLink to="/contact" className="navlinks">
          Contact Us
        </NavLink>
        <NavLink to="/mortgage" className="navlinks">
          Mortages
        </NavLink>
        <NavLink to="/login" className="navlinks">
          Login
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
