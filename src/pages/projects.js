import React from "react";
import { motion } from "framer-motion";
import Card from '../components/Card'
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
    className="container "
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
  >
    <div className="grid-container">
      <h1 className="projectstitle">Commercial Web projects</h1>
      <div className="row">
        
          <a
            href="https://skylimfitness.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
        imgUrl="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
        title="Relax"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
          </a>
          <Card
        imgUrl="https://images.unsplash.com/photo-1516035645781-9f126e774e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Chill"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
        <Card
        imgUrl="https://images.unsplash.com/photo-1516035645781-9f126e774e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Chill"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
        
       
          
        
        
          
          </div></div>
    
  </motion.div>
);
