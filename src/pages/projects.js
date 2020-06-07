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
    <div className="grid-container">
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
        href="https://skylimfitness.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front munchapp">
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
        href="https://skylimfitness.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front weatherapp">
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

</div>
<div className="row">
<div className="griditem">
      <a
        href="https://skylimfitness.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front todo">
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
        href="https://skylimfitness.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front quote">
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
        href="https://skylimfitness.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flip">
          <div className="front quiz">
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
</div>
<h1 className="moretocome">More coming soon!</h1>
</div>

  </motion.div>
);
