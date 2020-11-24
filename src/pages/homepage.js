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
  duration: 1.5,
};

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
          <div className="homepagelinkbox  col-sm-4">
            <NavLink to="/projects">
              <Card
                imgUrl="./images/projectspage.png"
                title=" My Projects"
                className="homepagecardimg "
                description=""
              />
            </NavLink>
          </div>
          <div className="homepagelinkbox col-sm-4">
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
          </div>
          <div className="homepagelinkbox col-sm-4">
            <NavLink to="/hireme">
              <Card
                imgUrl="./images/contact.png"
                title="Contact Me"
                className="homepagecardimg"
                description=""
              />
            </NavLink>{" "}
          </div>
          
        </div>
      
    </motion.div>
  );
}
export default Homepage;
