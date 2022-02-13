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
    y: '0vh',
  },
  out: {
    y: '100vh',
  },
};
const pagetransition = {
  duration: 1.1,
};
// make this a functional component
class Games extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        
        {
image: "./gamesImages/my_pet.png",
title: "My pet database",
link: "/mypet",
        },
        {
          image: "./gamesImages/dinogame.jfif",
          title: "Dinosaur Jumping game",
          link: "/dino",
          tag: "professional"
        },
        {
          image: "./gamesImages/dadabase.jpg",
          title: "Dad joke database",
          link: "/dadabase"

        },
        {
          image: "./gamesImages/pizza.jpeg",
          title: "Create your own Pizza UI",
          link: "/pizza",
          tag: "personal"
        },
        {
          image: "./gamesImages/hwsnew.png",
          title: "History's Armory",
          link: "/weaponsshop",
          tag: "personal"
        },
        {
          image: "./gamesImages/weatherapp.png",
          title: "Weatherapp",
          link: "/weather",
          tag: "personal"
        },
        
        {
          image: "./gamesImages/todo.png",
          title: "Javascript todo List",
          link: "/todo",
          tag: "personal"
        },
        
        {
          image: "./gamesImages/bitcoin.png",
          title: "CryptoTracker",
          link: "/bitcoin",
          tag: "personal"
        },
      
        {
          image: "./gamesImages/rest.jpeg",
          title: "REST API Widget",
          link: "/rest",
          tag: "personal"
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
        <Container className="Projects ">
       
          <p className="projectpagetitle ">
            Minigames and other<br /> Coding projects done for fun
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
        
          
        </Container>
      </motion.div>
    );
  }
}

export default Games;