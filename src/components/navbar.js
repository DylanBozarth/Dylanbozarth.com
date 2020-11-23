import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav class="navbar  navbar-dark navbar-expand-sm">
      <div class="container">
      
        <NavLink to="/" className="nav-link">
          {" "}
          <Nav.Link href="#features">Home</Nav.Link>{" "}
        </NavLink>
      
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#toggler-nav"
          aria-controls="toggler-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon justify-content-end"></span>
        </button>
        <div class="collapse navbar-collapse" id="toggler-nav">
          <div class="navbar-nav">
          
        <NavLink to="/Projects" className="nav-link">
          {" "}
          <Nav.Link href="#features">Projects</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Skills" className="nav-link">
          {" "}
          <Nav.Link href="#features">Skills</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Testimonials" className="nav-link">
          {" "}
          <Nav.Link href="#features">Testimonials</Nav.Link>{" "}
        </NavLink>
      
          </div>
        </div>
      </div>
    </nav>
);
