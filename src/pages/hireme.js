import React from 'react';
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
        duration: 1.2
      }

export const Hireme = () => (
    <motion.div
  
 initial="out"
 animate="in"
 exit="out"
 variants={changepage}
 transition={pagetransition}
    className="whitetext"
  >a</motion.div>
)