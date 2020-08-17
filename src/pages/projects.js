import React from "react";
import { motion } from "framer-motion";
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
export const Projects = () => (
  <motion.div
   className="container-fluid projectspage"
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
  >
    <h1 className="projectstitle">Commercial Web projects</h1>
    
      <div className="row">
      
    </div>
  </motion.div>
);
