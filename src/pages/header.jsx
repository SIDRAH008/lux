import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import "./index.css";
import logo from "./lux.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="Header">
      <div className="leftnav">
        <img src={logo} alt="" />
      </div>

      {/* Mobile menu icon */}
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        <div className={`bar ${showMobileMenu ? "open" : ""}`}></div>
        <div className={`bar ${showMobileMenu ? "open" : ""}`}></div>
        <div className={`bar ${showMobileMenu ? "open" : ""}`}></div>
      </div>

      <div className={`navlinksBar ${showMobileMenu ? "show" : ""}`}>
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavLink to="/properties" className="navlinks">
          OFF Plan
        </NavLink>
        {/* Add more dropdown items as needed */}
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
          Signup
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
