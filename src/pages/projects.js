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
      >
        <div className="flip">
          <div className="front skylimit">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>SkyLimit Fitness</h2>
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
      >
        <div className="flip">
          <div className="front hws">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>History's Armory</h2>
            <p>
             History's Armory, a website for collectors and enthusiasts to buy historical reproduction armor and weapons. Made with React and Scss. 
            </p>
          </div>
        </div>
      </a>
</div>


</div><h1 className="projectstitle">Personal Web Projects</h1>
<div className="row">
  
<div className="griditem">
      <a
        href="https://srv9z.codesandbox.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front munchapp">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>Munch</h2>
            <p>
              A food ordering app, made with React. With firebase and google log-in functionality. 
            </p>
          </div>
        </div>
      </a>
</div>
<div className="griditem">
      <a
        href="https://loving-newton-bfdf08.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front weatherapp">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>Mobile first React-native weatherapp </h2>
            <p>
              Made with accuweather API, type in any city and get the current weather. 
            </p>
          </div>
        </div>
      </a>
</div>

<div className="griditem">
      <a
        href="https://codepen.io/Dylanbozarth/pen/vYYKVNX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front calc">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>React Calculator</h2>
            <p>
              A calculator made with React. With every functionality that I could think of. 
            </p>
          </div>
        </div>
      </a>
</div>
<div className="griditem">
      <a
        href="https://codepen.io/Dylanbozarth/full/jOPNpJe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front todo">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>To do list</h2>
            <p>
              Simple CRUD (Create, read, update and delete) application. Made with Javascript and Node.js.  
            </p>
          </div>
        </div>
      </a>
</div>
<div className="griditem">
      <a
        href="https://codepen.io/Dylanbozarth/pen/gObbbNg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front quote">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>George Bush Quote machine</h2>
            <p>
              Made with Javascript, click to recieve a "Bushism". 
            </p>
          </div>
        </div>
      </a>
</div>
<div className="griditem">
      <a
        href="https://codepen.io/Dylanbozarth/full/oNgLoMN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front quiz">
            <h1 className="text-shadow skylimittitle"></h1>
          </div>
          <div className="back">
            <h2>Javascript Quiz</h2>
            <p>
              A quiz made with Scss animations. 
            </p>
          </div>
        </div>
      </a>
</div>
</div>
<h1 className="moretocome">More coming soon!</h1>
</div>

  </motion.div>
);
