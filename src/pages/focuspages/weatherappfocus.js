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

export const Weatherappfocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    
      <motion.div className="back" variants={backVariants}>
        <Link to="/otherProjects" className="whitetext backbutton">
          ← Back
        </Link>{" "}
         
        <p className="languagesused">Languages used</p>
        <div className="row">
          <img width="50px" height="50px" alt="icon" src='./images/html.jfif'></img>
          <img width="50px" height="50px" alt="icon"src='./images/css.jfif'></img>
          <img width="50px" height="50px" alt="icon"src='./images/javascript.png'></img>

          
        </div>
      </motion.div>{" "}
     <a href="https://loving-newton-bfdf08.netlify.app/" target="_blank" rel="noopener noreferrer"> <motion.img
        variants={imageVariants}
        src="./gamesImages/weatherapp.png"
        alt="JYMR doodles"
      />
    </a>

    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://loving-newton-bfdf08.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website 
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/Weatherapp"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
      A weather app made with accuweather's free api.  Type in any city and see the current weather.  <br />Using html, css, and javascript.
      </p>
    </div>
  </motion.div>
);
