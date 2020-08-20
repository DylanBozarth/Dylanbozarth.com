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

export const PowerstrokeFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    
      <motion.div className="back" variants={backVariants}>
        <Link to="/projects" className="whitetext backbutton">
          ← Back
        </Link>{" "}
         
        <p className="languagesused">Languages used</p>
        <div className="row">
          <img width="50px" height="50px" alt="icon" src='./images/react.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/scss.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/paypal.jpg'></img>
          
          <img width="70px" height="50px" alt="icon" src='./images/redux.png'></img>
        </div>
      </motion.div>{" "}
     <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"> <motion.img
        variants={imageVariants}
        src="./images/skyfitnessnew.jpg"
        alt="SkyLimit Fitness"
      />
    </a>

    <div className="linkbox">
      <a
        className="linkbutton"
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>{" "}
      <a
        className="linkbutton"
        href="https://github.com/Imstupidpleasehelp/spokane-power-stroke"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
        Skylimit Fitness. A React website made for a personal trainer from Spokane Washington. Skylimit fitness was my first full scale project. 
      </p>
    </div>
  </motion.div>
);
