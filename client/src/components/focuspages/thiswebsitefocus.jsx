import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const ThiswebsiteFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    
      <motion.div className="back" variants={backVariants}>
        <Link to="/projects" className="whitetext backbutton">
          ← Back
        </Link>{" "}
         
        <p className="languagesused">Languages used</p>
        <div className="row">
          <img width="50px" height="50px" alt="icon" src='./images/react.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/css.jfif'></img>
          <img width="50px" height="50px" alt="icon"src='./images/framermotion.gif'></img>
          <img width="50px" height="50px" alt="icon"src='./images/javascript.png'></img>
        
        </div>
      </motion.div>{" "}
      <motion.img
        variants={imageVariants}
        src="./images/thiswebsite.png"
        alt="SkyLimit Fitness"
      />
    

    <div className="linkbox">
      <div
        className="button2 b-blue rot-135"
       
        onClick={() => alert("You're already here!")}
      >
        View Website 
      </div>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/Dylanbozarth.com"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
     How is this website made?  My portfolio. Website made with React, React hooks, framer motion, and over 2000 lines of CSS code. 
      </p> 
    </div>
  </motion.div>
);
