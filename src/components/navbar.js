import React from "react";
import {  Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";


export const Navigation = () => (
  <nav className="container navbarmaster">
  <ul >
  <li>
      <NavLink to="/" className="nav-link">
            {" "}
            <Nav.Link href="#features">Home</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
      <NavLink to="/Projects" className="nav-link">
            {" "}
            <Nav.Link href="#features"  >Projects</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
    <NavLink to="/Skills" className="nav-link">
            {" "}
            <Nav.Link href="#features"  >Skills</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
    <NavLink to="/Testimonials" className="nav-link">
            {" "}
            <Nav.Link href="#features"  >Testimonials</Nav.Link>{" "}
          </NavLink>
    </li>
    <li>
    <NavLink to="/hireme" className="nav-link">
            {" "}
            <Nav.Link href="#features" >Hire me</Nav.Link>{" "}
            
          </NavLink>
          
    </li>
   
    
    
  </ul>
</nav>
);
