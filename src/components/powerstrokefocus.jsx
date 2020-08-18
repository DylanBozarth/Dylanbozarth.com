import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Col, Row } from "react-bootstrap";
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
  <Container>
    <motion.div className="" initial="exit" animate="enter" exit="exit">
      <Col>
        <motion.div className="back" variants={backVariants}>
          <Link to="/projects" className="whitetext">
            ← Back
          </Link>{" "}
        </motion.div>
      </Col>
      <Col>
        {" "}
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
      </Col>
      <Col >
         <p className="focustext">
            Spokane Power Stroke. asndkjabskdj asdn asdnlasn d aksdnlasd lansdln
            aslkd asldnlansdlnasld nasldn lasnd lasndlasdlasdla sndlasndas d
          </p>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
          className="focusimage"
            variants={imageVariants}
            src="./images/spokanepowerstroke.jpg"
            alt="SkyLimit Fitness"
          />
        </a>
      </Col>
    </motion.div>
  </Container>
);
