import React from "react";

import { motion } from "framer-motion";
import { Planet } from "../components/planet";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
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
   Where on Earth can you find a good developer? 
    <Planet />
  </motion.div>
);
