import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
export const Navigation = () => (
  <nav className="navbar  navbar-dark  navbar-expand-sm">
      <div className="container text-center">
      <NavLink to="/" className="nav-link">
          {" "}
          <p className="nav-link">Dylan Bozarth</p>{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#toggler-nav"
          aria-controls="toggler-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon justify-content-end"></span>
        </button>
        <div className="text-center"><div className="collapse navbar-collapse text-center" id="toggler-nav">
          
          
        <NavLink to="/Projects" className="nav-link">
          {" "}
          <p href="#features"  className="nav-link">Projects</p>{" "}
        </NavLink>
        <NavLink to="/Skills" className="nav-link">
          {" "}
          <p href="#features"  className="nav-link">Skills</p>{" "}
        </NavLink>
        <NavLink to="/Testimonials" className="nav-link">
          {" "}
          <p href="#features"  className="nav-link">Testimonials</p>{" "}
        </NavLink>
          </div>
        </div>
    </div>
    </nav>
);
