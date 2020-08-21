import React from "react";
import Card from "../components/card";

import { Container, Row } from "react-bootstrap";
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
      <Row>
        <Card
          imgUrl="https://skylimfitness.com/static/media/Sky.e0283525.jpg"
          title=" Skyler A. of Skylimit Fitness"
          description="Dylan was able to smoothly transfer the content of my slow, link-broken Wordpress website to a sleek, high-performance React website. I am extremely pleased with the results and only wish I had worked with Dylan sooner! 

        Dylan was very responsive with communication through messaging, email and phone calls, and was always friendly and clear. He was able to demonstrate and explain technical details in terms that made sense to a layman, while still keeping me in the loop of the design process.
        
        I look forward to having a website that will result in more sales rather than drive clients away - I highly recommend Dylan for all your website needs."
        />
        <Card
          imgUrl="https://skylimfitness.com/static/media/Sky.e0283525.jpg"
          title="Brandon B. Of Spokane Power Stroke"
          description="He's pretty great, I paid him in Sushi"
        />
      </Row>
    </Container>
  </motion.div>
);
