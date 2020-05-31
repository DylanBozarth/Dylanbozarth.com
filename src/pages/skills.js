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
        duration: 1.5
      }
export const Skills = () => (
    <motion.div
  
 initial="out"
 animate="in"
 exit="out"
 variants={changepage}
 transition={pagetransition}
    className="whitetext"
  ><h1>HE DO ANYHING</h1></motion.div>
)