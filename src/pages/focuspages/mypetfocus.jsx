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

export const MyPetFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    
      <motion.div className="back" variants={backVariants}>
        <Link to="/otherProjects" className="whitetext backbutton">
          ← Back
        </Link>{" "}
         
        <p className="languagesused">Technology used</p>
        <div className="row">
          <img width="50px" height="50px" alt="icon" src='./images/icons/react.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/icons/scss.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/icons/hooksicon.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/icons/nodejs.png'></img>
          <img width="50px" height="50px" alt="icon"src='./images/icons/mongo.png'></img>
          
        </div>
      </motion.div>{" "}
     <a href="https://quizzical-agnesi-02d509.netlify.app/" target="_blank" rel="noopener noreferrer"> <motion.img
        variants={imageVariants}
        src="./gamesImages/my_pet.png"
        alt="JavaScript"
      />
    </a>

    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://quizzical-agnesi-02d509.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/MERN-lesson"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
     Full Stack MERN (MongoDb, Express, React, and Node) Webapp. Share a photo of your pet and see other people's pets. 
     <br /> Go ahead and submit your own! 
      </p>
    </div>
  </motion.div>
);
