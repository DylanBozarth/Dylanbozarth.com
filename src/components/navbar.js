import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


export const Navigation = () => (
  <div
  className="homepage"
>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#home" className="pulse">
          Dylan Bozarth
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <NavLink to="/Projects">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Projects</Nav.Link>{" "}
          </NavLink>

          
          <NavLink to="/Skills">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Skills</Nav.Link>{" "}
          </NavLink>
          <NavLink to="/Testimonials">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Testimonials</Nav.Link>{" "}
          </NavLink>
        
        <NavLink to="/hireme" >
            {" "}
            <Nav.Link href="#features" >Hire me</Nav.Link>{" "}
            
          </NavLink><a href="https://codepen.io/Dylanbozarth/full/KKVzNvq"
        target="_blank"
        rel="noopener noreferrer" className="nav-link">Resumé</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
