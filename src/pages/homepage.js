import React from "react";

import { motion } from "framer-motion";
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
   <div class="wrapper">
    <div class="typing-demo">
      This is a typing demo.
    </div>
</div>
  </motion.div>
);
