import React from "react";
import { motion } from "framer-motion";

import Card from "../components/card";
import { NavLink } from "react-router-dom";
const changepage = {
  in: {
    y: '0vh',
  },
  out: {
    y: '100vh',
  },
};
const pagetransition = {
  duration: 1.2
};
const floatIn1 = {
  in: {
    y:'0vh'
  },
  out: {
    y: '100vh'
  },
}
const floatTransition = {
  duration: 1.2
}

function Homepage() {
 
  return (
    <motion.div
      id=""
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
      
       className="homepagelinkbox  col-lg-4">
            <NavLink to="/projects">
              <Card
                imgUrl="./images/projectspage.png"
                title="Professional Projects"
                className="homepagecardimg "
                description=""
              />
            </NavLink>
          </motion.div>
          <motion.div initial="out"
      animate="in"
      exit="out"
      
       className="homepagelinkbox  col-lg-4">
            <NavLink to="/games">
              <Card
                imgUrl="./images/projectspage.png"
                title="Unprofessional Projects"
                className="homepagecardimg "
                description=""
              />
            </NavLink>
          </motion.div>
          <motion.div className="homepagelinkbox col-lg-4" 
          initial="out"
          animate="in"
          exit="out"
          >
            <a
              href="https://drive.google.com/file/d/1uUpgsKgXbvMPbeHdmIUkTsQ7WLT6NpnW/view?usp=sharing"
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
          
        </div>
    </motion.div>
  );
}
export default Homepage;
