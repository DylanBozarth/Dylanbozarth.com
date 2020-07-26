import React from "react";

import { motion } from "framer-motion";
const changepage = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "150vw",
  },
};
const pagetransition = {
  duration: 0,
};
export const Homepage = () => (
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className=""
  >
<div id="container" className="homepagebox">
  Looking for a
  <div id="flip">
    <div><div>A website?</div></div>
    <div><div>An App?</div></div>
    <div><div>A web developer?</div></div>
  </div>
  
</div>

  </motion.div>
);
