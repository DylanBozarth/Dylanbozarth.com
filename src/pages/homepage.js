import React from "react";
import { Container} from "react-bootstrap";
import { motion } from "framer-motion";

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
return(
  <motion.div
    id="container"
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="homepagebox"
  >
    <Container className="typingstuff">
    <div className="container">
  <div className="neon" ref={hoverRef}>{isHovered ? "According to himself" : "The world's best front-end developer"}</div>
</div>
    </Container>
  </motion.div>
  )
};
export default Homepage