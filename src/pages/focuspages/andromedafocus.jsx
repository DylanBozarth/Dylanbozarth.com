import React from "react";

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

export const AndromedaFocus = ({ match }) => (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    <motion.div className="back" variants={backVariants}>
      <Link to="/ongoing" className="whitetext backbutton">
        ← Back
      </Link>{" "}
      <p className="languagesused">Technology used</p>
      <div className="row">
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="./images/icons/typescript.png"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="/images/icons/react.png"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="/images/icons/mongo.png"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="/images/icons/redux.png"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="/images/icons/hooksicon.png"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="/images/icons/scss.png"
        ></img>
        <img
          width="50px"
          height="50px"
          alt="icon"
          src="/images/icons/nodejs.png"
        ></img>
      </div>
    </motion.div>{" "}
    <a
      href="https://andromedagame.online/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <motion.img
        variants={imageVariants}
        src="./images/andromeda.webp"
        alt="4x space strategy game"
      />
    </a>
    <div className="linkbox">
      <a
        className="button2 b-blue rot-135"
        href="https://andromedagame.online/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Game
      </a>{" "}
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/DylanBozarth/Andromeda"
        target="blank"
        rel="noopener noreferrer"
      >
        View code (Front-end)
      </a>
      <a
        className="button2 b-blue rot-135"
        href="https://github.com/DylanBozarth/Andromeda-Backend"
        target="blank"
        rel="noopener noreferrer"
      >
        View code (Back-end)
      </a>
      <p className="focustext">
        I am currently leading a team to create the first always online 4x
        strategy game.
        <br />
        Currently looking for artists, writers, developers (TypeScript), and
        sci-fi fans of any kind. If interested {""}
        <a href="https://discord.gg/ePXHmgzj" target="_blank">
          join the team!
        </a>
      </p>
    </div>
  </motion.div>
);
