import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        UseContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact activeClassname="active" className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassname="active" className="nav-item nav-link" to="./login">
            Login
          </NavLink>
          <NavLink exact activeClassname="active" className="nav-item nav-link" to="./about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
