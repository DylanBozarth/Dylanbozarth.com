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

export const Dadfocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    <motion.div className="back" variants={backVariants}>
      <Link to="/projects" className="whitetext backbutton">
        ← Back
      </Link>{" "}
      <p className="languagesused">Languages used</p>
      <div className="row">
      <img
          width="50px"
          height="50px"
          alt="icon"
          src="./images/csharp.jpg"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="./images/mysql.png"
        ></img>
      </div>
    </motion.div>{" "}
    <a
      href="https://dadabase.azurewebsites.net/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <motion.img
        variants={imageVariants}
        src="./images/dadabase.png"
        alt="sql"
      />
    </a>
    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://dadabase.azurewebsites.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/c-lesson"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
       Branching out to other programming languages and having a bit of fun, Dad-a-base (get it?) is a full stack C# application for storing dad jokes.
      </p>
    </div>
  </motion.div>
);
