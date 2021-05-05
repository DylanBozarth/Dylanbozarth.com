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
  duration: 1.2,
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
        <div className="col-sm-6 testcard">
          <TestCard
            imgUrl="./images/michelle.jpg"
            title="Michelle R. of JYMR doodles"
            description="After previously placing all of our trust in a “Professional Web Designer” we were left feeling defeated when they failed to produce or even complete a website we were in desperate need of.    
            Creating a unique, customized site with functionality is a large task but finding the right Web Designer has proven to be even more complex for us. When Dylan Bozarth reached out asking to take on the task of creating a website for JYMR Doodles that would not only meet our functionality  needs but also be astatically pleasing and something we would love, we were very skeptical anyone would be able to design a website for us... 
            Dylan Bozarth has far exceeded our expectations and we LOVE our new website! Dylan has been very easy to work with and his turnaround time is phenomenal. He is very professional and strives to ensure he is able to bring his client’s visions to life. His eye for detail, calm demeanor and outgoing personality are all traits that have made working with Dylan very easy. We are extremely grateful for Dylan’s patience and willingness to help us create a website we will be able to use for years to come. We have been very impressed with Dylan and have zero reservations in recommending him to anyone for their projects large or small."
          />
        </div>
        <div className="col-sm-6 testcard">
          <TestCard
            imgUrl="https://skylimfitness.com/static/media/Sky.e0283525.jpg"
            title=" Skyler A. of Skylimit Fitness"
            description="Dylan was able to smoothly transfer the content of my slow, link-broken Wordpress website to a sleek, high-performance React website. I am extremely pleased with the results and only wish I had worked with Dylan sooner! 

        Dylan was very responsive with communication through messaging, email and phone calls, and was always friendly and clear. He was able to demonstrate and explain technical details in terms that made sense to a layman, while still keeping me in the loop of the design process.
        
        I look forward to having a website that will result in more sales rather than drive clients away - I highly recommend Dylan for all your website needs."
          />
        </div>
        <div className="col-sm-6 testcard">
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
