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

export const Navigation = (props) => {

 
  return (
    <nav className="navbar  navbar-dark navbar-expand-sm">
      <motion.div
        class="container-fluid"
        initial="out"
        animate="in"
        exit="out"
        variants={changepage}
        transition={pagetransition}
      >
        <NavLink
          to="/"
          className={props.buttonOn === 0 ? "nav-link-active" : "nav-link"}
          onClick={() => {
            props.setButtonOn(0);
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
              className={props.buttonOn === 1 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                props.setButtonOn(1);
              }}
            >
              {" "}
              <Nav.Link href="/Projects">Professional Work</Nav.Link>{" "}
            </NavLink>
            <NavLink
              to="/games"
              className={props.buttonOn === 2 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                props.setButtonOn(2);
              }}
            >
              {" "}
              <Nav.Link href="/games">Other Projects</Nav.Link>{" "}
            </NavLink>
            <NavLink
              to="/Skills"
              className={props.buttonOn === 3 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                props.setButtonOn(3);
              }}
            >
              {" "}
              <Nav.Link href="/Skills" className={props.buttonOn === 4 ? "nav-link-active" : "nav-link"}
              onClick={() => {
                props.setButtonOn(4);
              }}>My Tech Stack</Nav.Link>{" "}
            </NavLink>

            
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
