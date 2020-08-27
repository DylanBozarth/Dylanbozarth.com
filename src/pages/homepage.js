import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import Card from "../components/card";
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
          animate={{ rotate: 360 }}
          transition={{ duration: "1.5" }}
          className="neon"
          ref={hoverRef}
        >
          {isHovered
            ? "-Himself"
            : '"He is the best developer in the world"'}
        </motion.div>
        
        <Row className="homepagerow">
          <Col className="homepagelinkbox ">
          <NavLink to="/projects" >
          <Card
          imgUrl="./images/projectspage.png"
          title=" My Projects"
          className="homepagecardimg "
          description=""
        />
          </NavLink></Col>
          <Col className="homepagelinkbox">
            <a
              href="https://drive.google.com/file/d/1L6Hvq5Gymh1TG1DrfwAqvsj8zWwIW1C2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card 
          imgUrl="./images/resume.png"
          title="My Resume"
          className="homepagecardimg"
        />
            </a>
          </Col>
          <NavLink to="/hireme">
          <Col className="homepagelinkbox">
          <Card
          imgUrl="./images/contact.png"
          title="Contact Me"
          className="homepagecardimg"
          description=""
        />
          </Col>
          </NavLink>
        </Row>
      </Container>
    </motion.div>
  );
}
export default Homepage;
