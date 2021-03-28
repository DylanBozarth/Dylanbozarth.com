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
  const [On, setOn] = useState(false);
  const [On2, setOn2] = useState(false);
  const [On3, setOn3] = useState(false);
  const [On4, setOn4] = useState(false);
  useEffect(() => {
if (On === true) {
  setOn2(false)
  setOn3(false)
  setOn4(false)
}
if(On2 === true) {
  setOn(false)
  setOn3(false)
  setOn4(false)
}
if(On3 ===true) {
  setOn2(false)
  setOn(false)
  setOn4(false)
}
if (On4 === true) {
  setOn(false)
  setOn3(false)
  setOn2(false)
}
}, [On, On2, On3, On4] )
  
return(
  <nav className="navbar  navbar-dark navbar-expand-sm">
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
              On2
                ? "nav-link-active"
                : "nav-link"
            } onClick={() => (setOn2(true))}>
          {" "}
          <Nav.Link href="/Projects">Projects</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Skills" className={
              On3
                ? "nav-link-active"
                : "nav-link"
            } onClick={() => (setOn3(true))}>
          {" "}
          <Nav.Link href="/Skills">Skills</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Testimonials"  className={
              On4
                ? "nav-link-active"
                : "nav-link"
            } onClick={() => (setOn4(true))}>
          {" "}
          <Nav.Link href="/Testimonials">Testimonials</Nav.Link>{" "}
        </NavLink>
      
          </div>
        </div>
      </motion.div>
    </nav>
);
}
