// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import cogoToast from "cogo-toast";
import React from "react";

import { motion } from "framer-motion";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      invisibletext: "",
    };
  }

  render() {
    const { status } = this.state;
    function itworked() {
      cogoToast.success(
        "Thank you for reaching out! I will contact you shortly."
      );
    }

    function didntwork() {
      cogoToast.error("Error, please try again. ");
    }
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
    return (
      <motion.div
    className="container"
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
  >
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkdyqw"
        method="POST"
        className="contactform"
      >
        

       
        <label className="hiremelabel">Your name/Company Name</label>
        <input type="text" name="Name" placeholder="John Smith, Awesome LLC" />
        <br />
        <label className="hiremelabel">Email:</label>
        <input type="email" name="email" placeholder="123@email.com" />
        <br />
        <label className="hiremelabel">Phone number</label>
        <input type="text" name="Phone number" placeholder="867-5309" />
        <br />
        <label className="hiremelabel">Comments</label>
        <input type="text" name="Phone number"  />

       
        {status === "SUCCESS" ? (
          <p>{itworked()}</p>
        ) : (
          <button className="submitbutton">Submit</button>
        )}
        {status === "ERROR" && <p>{didntwork()}</p>}
      </form>
      </motion.div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}


  /* 
  <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="whitetext"
    id="form-div"
  >
    <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkdyqw"
        method="POST"
        className="form"
      >
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
  */ 

