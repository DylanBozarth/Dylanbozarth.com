import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ...transition },
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
export const OnGoing = () => {
  const [projects, setProjects] = useState([
    {
      image: "./images/andromeda.webp",
      title: "Andromeda",
      link: "/andromeda",
    }
  ]);

  return (
    <motion.div
      className="thumbnails scroll-page horizontal-center"
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
    >
      <div className="Projects ">
        <p className="projectpagetitle ">
          Long-term projects that are still in development
        </p>
        <div>
          {projects.map(({ title, image, link }) => (
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
        </div>
      </div>
    </motion.div>
  );
};
