import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  hover: { scale: 1.25 },
};
const changepage = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "100vw",
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
          image: "./images/skyfitnessnew.jpg",
          title: "Engine Repair",
          link: '/skylimit'
        },
        {
          image: "./images/spokanepowerstroke.jpg",
          title: "Engine Repair",
          link: '/skylimit'
        },
      ],
    };
  }
  state = {};
  render() {
    return (
      <div className="Projects">
        <motion.div
          className="thumbnails"
          initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
          
        >
          {this.state.items.map(({ title, image, link }) => (
            <motion.div className="thumbnail" variants={thumbnailVariants}>
              <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
              >
                <h1 className="Projectstitle">{title}</h1>
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
        </motion.div>
        
        
      </div>
    );
  }
}

export default Projects;
