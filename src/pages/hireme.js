import React from "react";
import { motion } from "framer-motion";
const changepage = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "50vw",
  },
};
const pagetransition = {
  duration: 1.5,
};

export const Hireme = () => (
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="whitetext"
    id="form-div"
  >
    <form className="form" id="form1">
      <h4>Your name/Company name</h4>
      <p className="name">
        <input
          name="name"
          type="text"
          className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          placeholder="Name"
          id="name"
        />
      </p>
      <h4>Your email</h4>
      <p className="email">
        <input
          name="email"
          type="text"
          className="validate[required,custom[email]] feedback-input"
          id="email"
          placeholder="Email"
        />
      </p>
      <h4>Comments</h4>
      <p className="text">
        <textarea
          name="text"
          className="validate[required,length[6,300]] feedback-input"
          id="comment"
          placeholder="Comment"
        ></textarea>
      </p>

      <div className="submit">
        <input type="submit" value="SEND" id="button-blue" />
        <div className="ease"></div>
      </div>
    </form>
  </motion.div>
);

/* 
<div id="form-div">
    <form className="form" id="form1">
      <h4>Your name/Company name</h4>
      <p className="name">
        <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      <h4>Your email</h4>
      <p className="email">
        <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>
      <h4>Comments</h4>
      <p className="text">
        <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>
      
      
      <div className="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div className="ease"></div>
      </div>
    </form>
  </div>
  */
