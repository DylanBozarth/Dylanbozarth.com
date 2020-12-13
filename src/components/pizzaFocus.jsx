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

export const pizzaFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    
      <motion.div className="back" variants={backVariants}>
        <Link to="/projects" className="whitetext backbutton">
          ← Back
        </Link>{" "}
         
        <p className="languagesused">Languages used</p>
        <div className="row">
          <img width="50px" height="50px" alt="icon" src='./images/react.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/scss.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/hooksicon.png'></img>
          
        </div>
      </motion.div>{" "}
     <a href="https://xenodochial-golick-10732e.netlify.app/" target="_blank" rel="noopener noreferrer"> <motion.img
        variants={imageVariants}
        src="./images/pizza.jpeg"
        alt="Pizza"
      />
    </a>

    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://xenodochial-golick-10732e.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/pizzaPiza"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
       After struggling with a "Create your own" portion of a pizza restaurant's app, I decided to create my own that would be as straightforward as possible. 
      </p>
    </div>
  </motion.div>
);
