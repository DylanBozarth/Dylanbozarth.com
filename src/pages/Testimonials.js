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
     className="testimonialpage"
   ><div className="blog-card">
    <div className="meta">
      <div className="photo"></div>
     <div className="details">
        <div className="author">Skyler K.</div>
        
          Owner of Skylimit Fitness
        
      </div>
    </div>
    <div className="description">
     
      <h2>I highly recommend Dylan to anyone who needs a website built or overhauled. </h2>
      <p> Dylan was able to smoothly transfer the content of my slow, link-broken Wordpress website to a sleek, high-performance React website. I am extremely pleased with the results and only wish I had worked with Dylan sooner! 

Dylan was very responsive with communication through messaging, email and phone calls, and was always friendly and clear. He was able to demonstrate and explain technical details in terms that made sense to a layman, while still keeping me in the loop of the design process.

Dylan was able to integrate many features into the new website such as an Ecommerce function for my services and products, a blogging platform, and a versatile contact page and an appealing home page. Best of all, he worked at an impressive speed and was often done with a page in what seemed like no time at all! I look forward to having a website that will result in more sales rather than drive clients away - I highly recommend Dylan for all your website needs.</p>
      
    </div>

  </div> </motion.div>
  
)