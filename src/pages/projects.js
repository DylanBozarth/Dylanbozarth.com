import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Col, Row } from "react-bootstrap";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.10 },
};
const changepage = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 1,
    y: "100vw",
  },
};
const pagetransition = {
  duration: 1.5,
};
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          image: "./images/spokanepowerstroke.jpg",
          title: "Spokane Power Stroke",
          link: "/powerstroke",
        },
        {
          image: "./images/skyfitnessnew.jpg",
          title: "Skylimit Fitness",
          link: "/skylimit",
        },
        {
          image: "./images/hwsnew.png",
          title: "History's Armory",
          link: "/weaponsshop",
        },
        
      ],
    };
  }
  state = {};
  render() {
    return (
      <motion.div
        className="thumbnails "
        initial="out"
        animate="in"
        exit="out"
        variants={changepage}
        transition={pagetransition}
      >
        
        <Container className="Projects "><h1 className="projectpagetitle">Comercial web projects</h1>
          <Row>
          <Col></Col>
          <Col>
          {this.state.items.map(({ title, image, link }) => (
            <motion.div className="thumbnail" variants={thumbnailVariants}>
              {" "}
              <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
              >
                <h1 className="projectstitle">{title}</h1>
                <Link to={link}>
                  <motion.img
                    src={image}
                    alt={image}
                    variants={imageVariants}
                    transition={transition}
                  />
                </Link>
              </motion.div>
            </motion.div>
          ))}</Col>
          <Col></Col>
        </Row></Container>
      </motion.div>
    );
  }
}

export default Projects;
