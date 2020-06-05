import React from "react";
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
export const Projects = () => (
   
  <motion.div className="container projectitems" 
  initial="out"
 animate="in"
 exit="out"
 variants={changepage}
 transition={pagetransition}>
    
        

<div className="row projectsmaster">
    
  
    <a href="https://skylimfitness.com/" target="_blank" rel="noopener noreferrer">
     <div className="flip">
    <div className="front skylimit" >
       <h1 className="text-shadow skylimittitle"></h1>
    </div>
    <div className="back">
       <h2>SkyLimit Fitness</h2>
       <p>SkyLimit Fitness, a personal trainer's website. With e-commerce and blog functionality. Made with React and SCSS</p>
    </div>
</div>
 </a>    
   
    <a href="https://admiring-lamport-599b6b.netlify.app/" target="_blank" rel="noopener noreferrer">
     <div className="flip">
    <div className="front munchapp">
       <h1 className="text-shadow"></h1>
    </div>
    <div className="back">
       <h2>Munch, Food ordering app.</h2>
       <p> Made with React and integrated with google firebase for log-in functionality.</p>
    </div>
</div></a>
</div>
   
    
      <div className="row">
    <a href="https://loving-newton-bfdf08.netlify.app/" target="_blank" rel="noopener noreferrer">
     <div className="flip">
    <div className="front weatherapp
" >
       <h1 className="text-shadow">Weather app</h1>
    </div>
    <div className="back">
       <h2>Weather app</h2>
       <p>A mobile-first global weather app. Made with React Native with search and API functionality.</p>
    </div>
</div>
</a>

<a href="https://loving-newton-bfdf08.netlify.app/" target="_blank" rel="noopener noreferrer">
     <div className="flip">
    <div className="front weatherapp
" >
       <h1 className="text-shadow">Weather app</h1>
    </div>
    <div className="back">
       <h2>Weather app</h2>
       <p>A mobile-first global weather app. Made with React Native with search and API functionality.</p>
    </div>
</div>
</a>
</div>
<div className="row">
<a href="https://loving-newton-bfdf08.netlify.app/" target="_blank" rel="noopener noreferrer">
     <div className="flip">
    <div className="front weatherapp
" >
       <h1 className="text-shadow">Weather app</h1>
    </div>
    <div className="back">
       <h2>Weather app</h2>
       <p>A mobile-first global weather app. Made with React Native with search and API functionality.</p>
    </div>
</div>
</a>





</div>
      
   
     
  </motion.div>
  
);
