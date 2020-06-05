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
export const Testimonials = () => (
  <motion.div
  
  initial="out"
  animate="in"
  exit="out"
  variants={changepage}
  transition={pagetransition}
     className="homepage"
   ><div class="blog-card">
    <div class="meta">
      <div class="photo"></div>
     <div className="details">
        <div class="author">Donald Trump</div>
        
          Author of 'The art of the deal'
        
      </div>
    </div>
    <div class="description">
      <h1>Sky LastName</h1>
      <h2>My website was wonderful</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      
    </div>
  </div> <div class="blog-card">
    <div class="meta">
      <div class="photo"></div>
     <div className="details">
        <div class="author">Donald Trump</div>
        
          Author of 'The art of the deal'
        
      </div>
    </div>
    <div class="description">
      <h1>Sky LastName</h1>
      <h2>My website was wonderful</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      
    </div>
  </div> </motion.div>
  
)