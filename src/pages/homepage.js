import React from "react";

import { motion } from "framer-motion";
const changepage = {
  in: {
  opacity: 1,
  x: 0
  },
  out: {
  opacity: 1,
  x: '-100vw'
  }
  
    }
    const pagetransition = {
      duration: 1.5
    }
export const Homepage = () => (
  
  <motion.div
  
 initial="out"
 animate="in"
 exit="out"
 variants={changepage}
 transition={pagetransition}
    className="homepage"
  >
    <h2 className="homepagetitle">Looking for a great developer?</h2>
  </motion.div>
);
