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
export const Homepage = () => (
  <motion.div
    id="container"
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="homepagebox"
  >
    <p className="fliptext"> Looking for </p>
    <div id="flip">
      <div>
        <div>
          {" "}
          <p className="fliptext">A website?</p>
        </div>
      </div>
      <div>
        <div>
          {" "}
          <p className="fliptext">An App?</p>
        </div>
      </div>
      <div>
        <div>
          {" "}
          <p className="fliptext">A web developer?</p>
        </div>
      </div>
    </div>
  </motion.div>
);
