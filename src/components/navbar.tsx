import React, { useState, useEffect } from "react";
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
interface homepageProps {
  buttonOn: number,
  setButtonOn: Function
}
export const Navigation = ({buttonOn, setButtonOn}: homepageProps) => {
  return (
    <nav className="navbar  navbar-dark navbar-expand-sm">
      <motion.div
        className="container-fluid"
        initial="out"
        animate="in"
        exit="out"
        variants={changepage}
        transition={pagetransition}
      >
        <NavLink
          to="/"
          onClick={() => {
            setButtonOn(0);
          }}
        >
          {" "}
          <div
            className={
              buttonOn === 0 ? "nav-link-active nav-link" : "nav-link"
            }
          >
            Dylan Bozarth
          </div>{" "}
        </NavLink>

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
            <NavLink
              to="/freelance"
              onClick={() => {
                setButtonOn(1);
              }}
            >
              {" "}
              <div
                className={
                  buttonOn === 1
                    ? "nav-link-active nav-link "
                    : "nav-link"
                }
              >
                Freelance work
              </div>{" "}
            </NavLink>
            <NavLink
              to="/otherProjects"
              onClick={() => {
                setButtonOn(2);
              }}
            >
              {" "}
              <div
                className={
                  buttonOn === 2
                    ? "nav-link-active nav-link "
                    : "nav-link"
                }
              >
                Other projects
              </div>{" "}
            </NavLink>
            <NavLink
              to="/ongoing"
              onClick={() => {
                setButtonOn(4);
              }}
            >
              {" "}
              <div
                className={
                  buttonOn === 4
                    ? "nav-link-active nav-link "
                    : "nav-link"
                }
              >
                Ongoing Projects
              </div>{" "}
            </NavLink>
            <NavLink
              to="/Skills"
              onClick={() => {
                setButtonOn(3);
              }}
            >
              {" "}
              <div
                className={
                  buttonOn === 3
                    ? "nav-link-active nav-link "
                    : "nav-link"
                }
              >
                Technologies
              </div>{" "}
            </NavLink>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
