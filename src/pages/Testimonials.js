import React from "react";
import TestCard from "../components/testcard";

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
export const Testimonials = () => (
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="testimonialpage"
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <TestCard
            imgUrl="https://skylimfitness.com/static/media/Sky.e0283525.jpg"
            title=" Skyler A. of Skylimit Fitness"
            description="Dylan was able to smoothly transfer the content of my slow, link-broken Wordpress website to a sleek, high-performance React website. I am extremely pleased with the results and only wish I had worked with Dylan sooner! 

        Dylan was very responsive with communication through messaging, email and phone calls, and was always friendly and clear. He was able to demonstrate and explain technical details in terms that made sense to a layman, while still keeping me in the loop of the design process.
        
        I look forward to having a website that will result in more sales rather than drive clients away - I highly recommend Dylan for all your website needs."
          />
        </div>
        <div className="col-sm-6">
          <TestCard
            imgUrl="./images/brandon.jpg"
            title="Brandon B. Of Spokane Power Stroke"
            description="Dylan was an excellent communicator and dilligent worker throughout the making of my website. I would describe what I wanted and before I knew it he would have a preview ready for me to view. He's great at what he does. "
          />
        </div>
      </div>
    </div>
  </motion.div>
);
