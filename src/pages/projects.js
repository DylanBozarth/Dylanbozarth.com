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
    y: '-2vh',
  },
  out: {
    y: '100vh',
  },
};
const pagetransition = {
  duration: 1.1,
};
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          image: "./images/jymr.jpg",
          title: "JYMR Doodles",
          link: "/doodles",
        },
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
          image: "./images/thiswebsite.png",
          title: "This website",
          link: "/portfolio",
        },
      ],
      practices: [
        {
          image: "./images/solarsystem.png",
          title: "Solar System Viewer",
          link: "/solarsystem",
        },
        {
          image: "./images/bitcoin.png",
          title: "CryptoTracker",
          link: "/bitcoin",
        },
        {
          image: "./images/pizza.jpeg",
          title: "Pizza Piza",
          link: "/pizza",
        },
        {
          image: "./images/hwsnew.png",
          title: "History's Armory",
          link: "/weaponsshop",
        },
        {
          image: "./images/weatherapp.png",
          title: "Weatherapp",
          link: "/weather",
        },
        {
          image: "./images/todo.png",
          title: "Javascript todo List",
          link: "/todo",
        },
        {
          image: "./images/jsquiz.png",
          title: "Javascript Quiz",
          link: "/jsquiz",
        },
      ],
    };
  }
  //https://www.dylanbozarth.com/Projects#practices
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
          </p>
          <Row>
            <Col></Col>
            <Col md="auto">
              {this.state.items.map(({ title, image, link }) => (
                <motion.div className="thumbnail" variants={thumbnailVariants}>
                  {" "}
                  <motion.div
                    key={title}
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
          <p className="projectpagetitle ">
              Practice projects: <br /> <br /> "You don't learn to walk by following
              rules. You learn by doing, and by falling over." <br /> -Richard
              Branson
            </p><Row>
              
            
            <Col></Col>
            <Col md="auto" id="practices">
              {this.state.practices.map(({ title, image, link }) => (
                <motion.div className="thumbnail" variants={thumbnailVariants}>
                  {" "}
                  <motion.div
                    key={title}
                    className="frame"
                    whileHover="hover"
                    variants={frameVariants}
                    transition={transition}
                  >
                    <p className="projectstitle">{title}</p>
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