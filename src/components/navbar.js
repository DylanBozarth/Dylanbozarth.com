import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="#">Wisdom Pets</a>
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
        <div className="collapse navbar-collapse" id="toggler-nav">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Mission</a>
            <a className="nav-item nav-link" href="#">Staff</a>
            <a className="nav-item nav-link disabled" href="#">Testimonials</a>
          </div>
        </div>
      </div>
    </nav>
);
