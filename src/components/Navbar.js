import React from "react";
import { Link } from "react-router-dom";
{
  /* Importing icons */
}
import { RiHome6Line } from "react-icons/ri";
{
  /* Style */
}
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-link" to="/">
            <div className="navbar-btn">About()</div>
          </Link>
          <Link className="navbar-link" to="/projects">
            <div className="navbar-btn">Projects()</div>
          </Link>
          <Link className="navbar-link" to="/contact">
            <div className="navbar-btn">Contact()</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
