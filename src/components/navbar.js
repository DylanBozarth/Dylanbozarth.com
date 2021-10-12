import React, { useState, useEffect } from "react";
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
  const [buttonOn, setButtonOn] = useState(0);

 
  return (
    <nav className="navbar  navbar-dark navbar-expand-sm">
      <motion.div
        class="container"
        initial="out"
        animate="in"
        exit="out"
        variants={changepage}
        transition={pagetransition}
      >
        <NavLink
          to="/"
          className={buttonOn === 0 ? "nav-link-active" : "nav-link"}
          onClick={() => {
            setButtonOn(0);
          }}
        >
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
            <NavLink
              to="/Projects"
              className={buttonOn === 1 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                setButtonOn(1);
              }}
            >
              {" "}
              <Nav.Link href="/Projects">My Work</Nav.Link>{" "}
            </NavLink>
            <NavLink
              to="/Projects"
              className={buttonOn === 1 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                setButtonOn(1);
              }}
            >
              {" "}
              <Nav.Link href="/games">Games</Nav.Link>{" "}
            </NavLink>
            <NavLink
              to="/Skills"
              className={buttonOn === 2 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                setButtonOn(2);
              }}
            >
              {" "}
              <Nav.Link href="/Skills">My Skills</Nav.Link>{" "}
            </NavLink>

            <NavLink
              to="/Testimonials"
              className={buttonOn === 3 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                setButtonOn(3);
              }}
            >
              {" "}
             
            </NavLink>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
