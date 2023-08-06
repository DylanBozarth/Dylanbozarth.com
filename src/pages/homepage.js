import React from "react";
import { motion } from "framer-motion";

import Card from "../components/card";
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
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          className=" col-sm-4"
          onClick={() => props.setButtonOn(1)}
        >
          <Card
            imgUrl="./images/projectspage.webp"
            link="/freelance"
            title="Professional Projects"
            className=" "
            description=""
          />
        </motion.div>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          className="col-sm-4"
          onClick={() => props.setButtonOn(2)}
        >
          <Card
            imgUrl="./images/unprofessional.webp"
            title="Personal Projects"
            link="/otherProjects"
            className=" "
            description=""
          />
        </motion.div>
        <motion.div className=" col-sm-4" initial="out" animate="in" exit="out">
          <a
            href="https://drive.google.com/file/d/19Bqw_F6VsmHtQEZAZBLS7yrry8Mjzn13/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card gradient-border container-fluid resume">
              <div className="card-info">
                <h4 className="card-title">My Resume</h4>
                <div className="card-waves" />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Homepage;
