import { motion } from "framer-motion";
import React from "react";

export default class Hireme extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
      
    };
  }

  render() {
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
    const { status } = this.state;
    return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={changepage}
    transition={pagetransition}
    className="homepage"
  >
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkdyqw"
        method="POST"
        className="form"
      >
      <div className="login">
	<h1>AAAAA</h1>
    <form method="post">
    	<input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
    </form>
</div>
      </form>{status === "SUCCESS" ? <p>Thanks!</p> : <div className="submit">
        <input type="submit" value="SEND" id="button-blue" />
        <div className="ease"></div>
      </div>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}</motion.div>
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

