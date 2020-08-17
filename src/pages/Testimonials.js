import React from 'react';
import Card from "../components/card";

import { Container} from "react-bootstrap";
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
   >
        <Container>
        <Card
        imgUrl="https://skylimfitness.com/static/media/Sky.e0283525.jpg"
        title="Relax"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
          
    </Container>
</motion.div>
  
)