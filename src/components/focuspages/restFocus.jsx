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

export const RestFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    <motion.div className="back" variants={backVariants}>
      <Link to="/games" className="whitetext backbutton">
        ← Back
      </Link>{" "}
      <p className="languagesused">Languages used</p>
      <div className="row">
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="./images/react.png"
        ></img>
        
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="./images/hooksicon.png"
        ></img>
        <img
          width="70px"
          height="50px"
          alt="icon"
          src="./images/next.png"
        ></img>
      </div>
    </motion.div>{" "}
    <a
      href="https://restapi-m9j0bxo3n-imstupidpleasehelp.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <motion.img
        variants={imageVariants}
        src="./images/rest.jpeg"
        alt="REST API"
        className="restimage"
      />
    </a>
    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://restapi-m9j0bxo3n-imstupidpleasehelp.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/Imstupidpleasehelp/restapi"
        target="blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
      <p className="focustext">
      I decided I needed more practice with REST apis and Next.js, so I built an app with both of them!
Search any github user by their username and see information about them.
      </p>
    </div>
  </motion.div>
);
