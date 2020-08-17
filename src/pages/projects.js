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
            <h2 className="projectlink skylimittext">SkyLimit Fitness</h2>
            <div className="flip">
              <div className="front skylimit col-md-12 ml-auto">
                <h1 className="text-shadow skylimittitle"></h1>
              </div>
              <div className="back">
                <p>
                  SkyLimit Fitness, a personal trainer's website. With
                  e-commerce and blog functionality. Made with React and SCSS
                </p>
                <div className="row iconrow">
                  <div className="reacticon"></div>
                  
                  <div className="scssicon"></div>
                  <div className="paypalicon"></div>
                </div>
              </div>
            </div>
          </a>
        
       
          <a
          onClick={() => alert('Site not deployed at this time, please check back later.')}
            href=""
            /*target="_blank" */
            rel="noopener noreferrer"
          >
            <h2 className="projectlink powerstroketext">
              Spokane Power Stroke
            </h2>
            <div className="flip">
              <div className="front powerstroke col-md-12 ml-auto">
                <h1 className="text-shadow skylimittitle"></h1>
              </div>
              <div className="back">
                <p> A power-stroke autoshop in Spokane Washington. Site made with React and framer motion for modern looking design.  </p>
                <div className="row iconrow">
                  <div className="reacticon"></div>
                  <div className="cssicon"></div>
                  <div className="framermotionicon"></div>
                </div>
              </div>
              
            </div>
          </a>
        
        
          <a
            href="https://76y7e.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="projectlink hwstext">History's Armory</h2>
            <div className="flip">
              <div className="front hws col-md-12 ml-auto">
                <h1 className="text-shadow skylimittitle"></h1>
              </div>
              <div className="back">
                <p>
                  History's Armory, a website for collectors and enthusiasts to
                  buy historical reproduction armor and weapons. Made with React
                  and Scss.
                </p>
                <div className="row iconrow">
                  <div className="reacticon"></div>
                  <div className="cssicon"></div>
                  <div className="framermotionicon"></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    
  </motion.div>
);
