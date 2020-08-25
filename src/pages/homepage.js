import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import useHover from "../components/usehover";
import { motion } from "framer-motion";
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
return(
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
      This is my portfolio
      <Row>
        <Col className="portfolioitem">My projects</Col>
        <Col className="portfolioitem">My skills</Col>
        <Col className="portfolioitem" ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</Col>
      </Row>
    </Container>
  </motion.div>
  )
};
export default Homepage