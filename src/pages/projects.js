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
    className="container projectitems"
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
  >
    <div className="grid-container"><h1 className="projectstitle">Commercial Web projects</h1>
       <div className="row">
         
       <div className="griditem">
      <a
        href="https://skylimfitness.com/"
        target="_blank"
        rel="noopener noreferrer"
      ><h2 className="projectlink">SkyLimit Fitness</h2>
        <div className="flip">
          <div className="front skylimit">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            
            <p>
              SkyLimit Fitness, a personal trainer's website. With e-commerce
              and blog functionality. Made with React and SCSS
            </p>
          </div>
        </div>
      </a>
</div>
<div className="griditem">
      <a
        href="https://76y7e.csb.app/"
        target="_blank"
        rel="noopener noreferrer"
      ><h2 className="projectlink">Spokane Power Stroke</h2>
        <div className="flip">
          <div className="front hws">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
           
            <p>
             History's Armory, a website for collectors and enthusiasts to buy historical reproduction armor and weapons. Made with React and Scss. 
            </p>
          </div>
        </div>
      </a>
</div>
<div className="griditem">
      <a
        href="https://srv9z.codesandbox.io/"
        target="_blank"
        rel="noopener noreferrer"
      ><h2 className="projectlink">History's Armory</h2>
        <div className="flip">
          <div className="front munchapp">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            
            <p>
              A food ordering app, made with React. With firebase and google log-in functionality. 
            </p>
          </div>
        </div>
      </a>
</div>


</div></div>
  </motion.div>
);
