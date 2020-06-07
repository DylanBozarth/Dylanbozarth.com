import React from "react";
import { motion } from "framer-motion";
const changepage = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "100vw",
  },
};
const pagetransition = {
  duration: 1.5,
};
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
        <div className=""><div className="blog-card2">
    <div className="meta2">
      <div className="photo2"></div>
     <div className="details2">
        <div className="author2">HTML</div>
        
          Html is a basic website language blah blah
        
      </div>
    </div>
    <div className="description2">
      <h1>Sky LastName</h1>
      <h2>My website was wonderful</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      
    </div>

  </div></div>
        <div className="col-sm skillitem css"></div>
        <div className="col-sm skillitem  js"></div>
        <div className="col-sm skillitem react"></div>
        <div className="col-sm skillitem reactnative"></div>
        <div className="col-sm skillitem redux"></div>
        <div className="col-sm skillitem nodejs"></div>
        <div className="col-sm skillitem scss"></div>
      </div>
      <h1 className="skillevidence">Evidence</h1>
      <div className="row">
        <div className="col-md-4">
        <div className="skillboximggithub"></div>  <br />My Github
        </div>
        <div className="col-md-4"><div className="skillboximgcodepen"></div> <br />My Codepen</div>
        <div className="col-md-4"> <div className="skillboximgfcc"></div>
            
           <br />Freecodecamp</div>
      </div>
    </div>
  </motion.div>
);

/* 
<div className="searchcontainer"><h1 className="searchtext"> Search</h1>
  <input type="text" placeholder="Search..."></input>
  <div className="search"></div>
  </div>
  */
