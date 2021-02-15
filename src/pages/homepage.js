import React from "react";
import { motion } from "framer-motion";

import Card from "../components/card";
import { NavLink } from "react-router-dom";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pagetransition = {
  duration: 1.2,
};
const floatIn1 = {
  in: {
    y: 0
  },
  out: {
    y: '200vh'
  },
}
const floatTransition = {
  duration: 1.5
}
const floatTransition2 = {
  duration: 1.9
}
const floatTransition3 = {
  duration: 2.1
}
function Homepage() {
 
  return (
    <motion.div
      id="container"
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
      className="homepagebox container"
    >
      
     
        <div className="row">
          <motion.div initial="out"
      animate="in"
      exit="out"
      variants={floatIn1}
      transition={floatTransition}
       className="homepagelinkbox  col-sm-4">
            <NavLink to="/projects">
              <Card
                imgUrl="./images/projectspage.png"
                title=" My Projects"
                className="homepagecardimg "
                description=""
              />
            </NavLink>
          </motion.div>
          <motion.div className="homepagelinkbox col-sm-4" 
          initial="out"
          animate="in"
          exit="out"
          variants={floatIn1}
          transition={floatTransition2}>
            <a
              href="https://drive.google.com/file/d/13Vhmlja68U-fa6Tog0hKdzXqISS51x4f/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                imgUrl="./images/resume.png"
                title="My Resume"
                className="homepagecardimg"
              />
            </a>
          </motion.div>
          <motion.div className="homepagelinkbox col-sm-4" 
          initial="out"
          animate="in"
          exit="out"
          variants={floatIn1}
          transition={floatTransition3}>
            <NavLink to="/hireme">
              <Card
                imgUrl="./images/contact.png"
                title="Contact Me"
                className="homepagecardimg"
                description=""
              />
            </NavLink>{" "}
          </motion.div>
          
        </div>
      
    </motion.div>
  );
}
export default Homepage;
