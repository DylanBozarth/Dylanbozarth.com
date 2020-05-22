import React from 'react';
import {  Navbar, Nav , } from 'react-bootstrap'
import { Link } from "react-router-dom";


export const Navigation = () => (
    <div >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Link to="/"><Navbar.Brand href="#home" className="navbartitle">Dylan Bozarth</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <Link to="/Projects"> <Nav.Link href="#features">Projects</Nav.Link> </Link>
     <Link to="/About"> <Nav.Link href="#pricing">About me</Nav.Link></Link>
    </Nav>
    <Nav>
     <Link to="/hireme"> <Nav.Link className="hireme" href="hireme">Hire me</Nav.Link></Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)