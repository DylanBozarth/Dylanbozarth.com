import React, {useState, useEffect} from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pagetransition = {
  duration: 1.5,
};

export const Navigation = () => {
  useEffect((On, setOn, On2, setOn2, On3, On4) => {
if (On === true) {
  setOn2(true)
}
},)
  const [On, setOn] = useState(false);
  const [On2, setOn2] = useState(false);
  const [On3, setOn3] = useState(false);
  const [On4, setOn4] = useState(false);
return(
  <nav class="navbar  navbar-dark navbar-expand-sm">
      <motion.div class="container" 
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
      >
      
        <NavLink to="/" className={
              On
                ? "nav-link-active"
                : "nav-link"
            }
              onClick={() => (setOn(true))}>
          {" "}
          <Nav.Link href="/">Dylan Bozarth</Nav.Link>{" "}
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
          
        <NavLink to="/Projects" className={
              On2.isActive
                ? "nav-link-active"
                : "nav-link"
            }>
          {" "}
          <Nav.Link href="/Projects">Projects</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Skills" className={
              On3.isActive
                ? "nav-link-active"
                : "nav-link"
            }>
          {" "}
          <Nav.Link href="/Skills">Skills</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Testimonials"  className={
              On4.isActive
                ? "nav-link-active"
                : "nav-link"
            }>
          {" "}
          <Nav.Link href="/Testimonials">Testimonials</Nav.Link>{" "}
        </NavLink>
      
          </div>
        </div>
      </motion.div>
    </nav>
);
}
