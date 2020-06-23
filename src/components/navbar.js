import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


export const Navigation = () => (
  <nav className="container">
  <ul>
  <li>
      <NavLink to="/">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Home</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
      <NavLink to="/Projects">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Projects</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
    <NavLink to="/Skills">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Skills</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
    <NavLink to="/Testimonials">
            {" "}
            <Nav.Link href="#features" className="nav-link" >Testimonials</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
    <NavLink to="/hireme" >
            {" "}
            <Nav.Link href="#features" >Hire me</Nav.Link>{" "}
            
          </NavLink>
    </li>
    <li>
    <a href="https://drive.google.com/file/d/1L6Hvq5Gymh1TG1DrfwAqvsj8zWwIW1C2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer" className="nav-link">Resumé</a>
    </li>
  </ul>
</nav>
);

/* 
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
    */ 