import React from "react";
import { motion } from "framer-motion";

import Card from "../components/card";
import { NavLink } from "react-router-dom";
const changepage = {
  in: {
    y: "0vh",
  },
  out: {
    y: "100vh",
  },
};
const pagetransition = {
  duration: 1.2,
};
const floatIn1 = {
  in: {
    y: "0vh",
  },
  out: {
    y: "100vh",
  },
};

function Homepage(props) {
  return (
    <motion.div
      id=""
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
      className=" container homepage"
    >
      <div className="row">
        <motion.div initial="out" animate="in" exit="out" className=" col-sm-4">
          <NavLink to="/projects" onClick={() => props.setButtonOn(1)}>
            <Card
              imgUrl="./images/projectspage.webp"
              title="Professional Projects"
              className=" "
              description=""
            />
          </NavLink>
        </motion.div>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          className="  col-sm-4"
        >
          <NavLink to="/otherProjects" onClick={() => props.setButtonOn(2)}>
            <Card
              imgUrl="./images/unprofessional.webp"
              title="Personal Projects"
              className=" "
              description=""
            />
          </NavLink>
        </motion.div>
        <motion.div className=" col-sm-4" initial="out" animate="in" exit="out">
          <a
            href="https://drive.google.com/file/d/19Bqw_F6VsmHtQEZAZBLS7yrry8Mjzn13/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card imgUrl="./images/resume.webp" title="My Resume" className="" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Homepage;
