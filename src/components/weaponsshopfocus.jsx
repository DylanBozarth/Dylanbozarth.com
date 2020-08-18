import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export const Weaponsshopfocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    <a href="https://www.google.com/" target="_blank"
        rel="noopener noreferrer">
      <motion.img
        variants={imageVariants}
        src="./images/hwsnew.png"
        alt="History's Armory"
      />
    </a>
    <motion.div className="back" variants={backVariants}>
      <Link to="/projects" className="whitetext">
        ← Back
      </Link>{" "}
      <br />
    </motion.div>{" "}
    <p className="focustext">
      Spokane Power Stroke. asndkjabskdj asdn asdnlasn d aksdnlasd lansdln aslkd
      asldnlansdlnasld nasldn lasnd lasndlasdlasdla sndlasndas d
    </p>
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
    </div>
  </motion.div>
);