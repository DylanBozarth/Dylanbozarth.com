import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#home" className="pulse">
          Dylan Bozarth
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Projects">
            {" "}
            <Nav.Link href="#features" className="nav-link">Projects</Nav.Link>{" "}
          </Link>

          <Link to="/Testimonials">
            {" "}
            <Nav.Link href="#features" className="nav-link">Testimonials</Nav.Link>{" "}
          </Link>
          <Link to="/Skills">
            {" "}
            <Nav.Link href="#features" className="nav-link">Skills</Nav.Link>{" "}
          </Link>
          
        </Nav>
        <Nav>
        <Link to="/hireme">
            {" "}
            <Nav.Link href="#features">Hire me</Nav.Link>{" "}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
