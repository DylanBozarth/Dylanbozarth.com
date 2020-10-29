import React from "react";
import { motion } from "framer-motion";

import Card from "../components/card";
import { NavLink } from "react-router-dom";
import useHover from "../components/usehover";
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

function Homepage() {
  const [hoverRef, isHovered] = useHover();
  return (
    <motion.div
      id="container"
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
      className="homepagebox container"
    >
      
      <div className="typingstuff ">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: "1.5" }}
          className="neon"
          ref={hoverRef}
        >
          {isHovered ? "-Himself" : '"He is the best developer in the world"'}
        </motion.div>

        <div className="row">
          <div className="homepagelinkbox  col-sm-4">
            <NavLink to="/projects">
              <Card
                imgUrl="./images/projectspage.png"
                title=" My Projects"
                className="homepagecardimg "
                description=""
              />
            </NavLink>
          </div>
          <div className="homepagelinkbox col-sm-4">
            <a
              href="https://drive.google.com/file/d/1swIOZfE6JMSCedOT4UNsmNsSPxQsNQiU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                imgUrl="./images/resume.png"
                title="My Resume"
                className="homepagecardimg"
              />
            </a>
          </div>
          <div className="homepagelinkbox col-sm-4">
            <NavLink to="/hireme">
              <Card
                imgUrl="./images/contact.png"
                title="Contact Me"
                className="homepagecardimg"
                description=""
              />
            </NavLink>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Homepage;
