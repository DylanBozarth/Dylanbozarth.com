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

export const SolarsystemFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    
      <motion.div className="back" variants={backVariants}>
        <Link to="/otherProjects" className="whitetext backbutton">
          ← Back
        </Link>{" "}
         
        <p className="languagesused">Technology used</p>
        <div className="row">
          <img width="50px" height="50px" alt="icon" src='./images/icons/react.png'></img>
          <img width="50px" height="50px" alt="icon" src='./images/icons/scss.png'></img>
         
          <img width="50px" height="50px" alt="icon" src='./images/framermotion.gif'></img>
        </div>
      </motion.div>{" "}
     <a href="https://brave-wiles-0ecc37.netlify.app/" target="_blank" rel="noopener noreferrer"> <motion.img
        variants={imageVariants}
        src="./images/solarsystem.png"
        alt="SkyLimit Fitness"
      />
    </a>

    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://brave-wiles-0ecc37.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/planetviewer"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
      Does space excite you? Same. That's why I built this App to view the solar system. Using React, tons of SCSS, and Framer-motion. (+sweat and tears).
      <br /> Not made for mobile screens.
      </p>
    </div>
  </motion.div>
);
