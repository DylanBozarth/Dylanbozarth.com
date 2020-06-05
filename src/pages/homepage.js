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
  duration: 1.5,
};
export const Homepage = () => (
  
  <motion.div
  initial="out"
  animate="in"
  exit="out"
  variants={changepage}
  transition={pagetransition}
 
    className="homepage"
    
  >
    <motion.h2 className="homepagetitle" >Looking for a great developer?</motion.h2>
    
  </motion.div>
);
