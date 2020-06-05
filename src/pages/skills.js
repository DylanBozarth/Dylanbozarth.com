import React from 'react';
import { motion } from "framer-motion";
const changepage = {
    in: {
    opacity: 1,
    x: 0
    },
    out: {
    opacity: 1,
    x: '100vw'
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
  >
    
  
<div className="container">
  <div className="row">
    <div className="col-sm skillitem">
      HTML
    </div>
    <div className="col-sm skillitem">
      CSS
    </div>
    <div className="col-sm skillitem ">
      Javascript
    </div>
    <div className="col-sm skillitem">
      React
    </div>
    <div className="col-sm skillitem">
      Redux
    </div>
    <div className="col-sm skillitem">
      Node.Js
    </div>
    <div className="col-sm skillitem">
      Scss
    </div>
    
  </div>
  <h1>Evidence</h1>
  <div>link1</div>
  <div>Link2</div>
  <div>Link3</div>
</div>

  </motion.div>
)

/* 
<div className="searchcontainer"><h1 className="searchtext"> Search</h1>
  <input type="text" placeholder="Search..."></input>
  <div className="search"></div>
  </div>
  */