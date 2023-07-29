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
  hover: { scale: 1.1 },
};
const changepage = {
  in: {
    y: "0vh",
  },
  out: {
    y: "100vh",
  },
};
const pagetransition = {
  duration: 1.1,
};
// clean this up lol
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          image: "./images/jymr.jpg",
          title: "JYMR Doodles",
          link: "/doodles",
          tag: "professional",
        },
        {
          image: "./images/spokanepowerstroke.png",
          title: "Spokane Power Stroke",
          link: "/powerstroke",
          tag: "professional",
        },
        {
          image: "./images/skyfitnessnew.jpg",
          title: "Skylimit Fitness",
          link: "/skylimit",
          tag: "professional",
        },
      ],
    };
  }
  //www.dylanbozarth.com/Projects#practices
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
        <Container className="Projects ">
          <p className="projectpagetitle ">
            Comercial web projects <br /> Click for more details
            {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="sort-button">aaa</p>
    <p className="sort-button">aaa</p>
    <p className="sort-button">aaa</p>
  </div>
</div>
    */}
          </p>
          <Row>
            <Col></Col>
            <Col md="auto">
              {this.state.items.map(({ title, image, link }) => (
                <motion.div
                  className="thumbnail"
                  variants={thumbnailVariants}
                  key={title}
                >
                  {" "}
                  <motion.div
                    className="frame"
                    whileHover="hover"
                    variants={frameVariants}
                    transition={transition}
                  >
                    <p className="projectstitle">{title}</p>
                    <Link to={link}>
                      <motion.img
                        src={image}
                        alt="javascript react developer"
                        variants={imageVariants}
                        transition={transition}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </motion.div>
    );
  }
}

export default Projects;
