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
export const Projects = () => (
   
  <motion.div className="projectspage container" 
  initial="out"
 animate="in"
 exit="out"
 variants={changepage}
 transition={pagetransition}>
    <div className="row">
      <div className="col-sm projectitem">
        

<div className="container projectitems">
  <div className="row">
    
  
    <div className="col-sm">
     <div className="flip">
    <div className="front skylimit" >
       <h1 className="text-shadow">SKYLIMIT FITNESS</h1>
    </div>
    <div className="back">
       <h2>SkyLimit Fitness</h2>
       <p>SkyLimit Fitness, a personal trainer's website. With e-commerce and blog functionality. Made with React and SCSS</p>
    </div>
</div>
     </div>
   
    
     <div className="flip">
    <div className="front">
       <h1 className="text-shadow">MOUNTAIN</h1>
    </div>
    <div className="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
    </div>
   
    
      
    
     <div className="flip">
    <div className="front" >
       <h1 className="text-shadow">MOUNTAIN</h1>
    </div>
    <div className="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
</div>




      </div>
      </div>
     
  </motion.div>
  
);
