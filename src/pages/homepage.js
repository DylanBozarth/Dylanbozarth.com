import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useHover from "../components/usehover";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pagetransition = {
  duration: 1.5,
};

function Homepage() {
  const [hoverRef, isHovered] = useHover();
  return (
    <motion.div
      id="container"
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
      className="homepagebox"
    >
      <Container className="typingstuff">
        <motion.div
          animate={{ rotate: 365 }}
          transition={{ duration: '.5' }}
          className="neon"
          ref={hoverRef}
        >
          "
          {isHovered
            ? "According to himself"
            : "The world's best front-end developer"}
          "
        </motion.div>
        <Row className="homepagerow">
          <Col>
            <Nav.Link to="/projects">Projects</Nav.Link>{" "}
          </Col>
          <Col>
            {" "}
            <Nav.Link to="/hireme">Hire me</Nav.Link>{" "}
          </Col>
          <Col>
            <a
              href="https://drive.google.com/file/d/1L6Hvq5Gymh1TG1DrfwAqvsj8zWwIW1C2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div>Resumé</div>{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
export default Homepage;
