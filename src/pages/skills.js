import React from "react";
import { motion } from "framer-motion";

import { Row } from "react-bootstrap";
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
const rowIn = {
  in: {
    x: 0
  },
  out: {
    x: '100vw'
  },
};
const rowIn2 = {
  in: {
    x: 0
  },
  out: {
    x: '-100vw'
  },
};
const SlideIn = {
  duration: 1.2,
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
      <p className="projectpagetitle">I work with the following technologies</p>
      <p className="projectstitle">
       Anything that I don't already know, I am
        always able to learn.
      </p>
      <motion.div initial="out"
    animate="in"
    exit="out"
    variants={rowIn}
    transition={SlideIn} className="row">
        <div className="col-sm ">
          <aside className="profile-card asidehtml">
            <header></header>

            <div className="profile-bio">
              <p>HTML</p>
              <p>
                Hypertext Markup Language (HTML) is the standard markup language
                for documents designed to be displayed in a web browser. It can
                be assisted by technologies such as Cascading Style Sheets (CSS)
                and scripting languages such as JavaScript.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidecss">
            <header></header>

            <div className="profile-bio">
              <p>CSS</p>
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language like HTML. CSS is a cornerstone technology of the World
                Wide Web, alongside HTML and JavaScript.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidejs">
            <header></header>

            <div className="profile-bio">
              <p>Javascript</p>
              <p>
                Alongside HTML and CSS, JavaScript is one of the core
                technologies of the World Wide Web. JavaScript enables
                interactive web pages and is an essential part of web
                applications. The vast majority of websites use it for
                client-side page behavior, and all major web browsers have a
                dedicated JavaScript engine to execute it.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidereact">
            <header></header>

            <div className="profile-bio">
              <p>React</p>
              <p>
                React (also known as React.js or ReactJS) is an open-source
                JavaScript library for building user interfaces. It is
                maintained by Facebook and a community of individual developers
                and companies.
              </p>
            </div>
          </aside>{" "}
        </div>
      </motion.div>
      <motion.div initial="out"
    animate="in"
    exit="out"
    variants={rowIn2}
    transition={SlideIn} className="row">
        <div className="col-sm ">
          <aside className="profile-card asidereactnative">
            <header></header>

            <div className="profile-bio">
              <p>React-native</p>
              <p>
                React Native is an open-source mobile application framework
                created by Facebook. It is used to develop applications for
                Android, iOS, Web and UWP by enabling developers to use React
                along with native platform capabilities.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidenodejs">
            <header></header>

            <div className="profile-bio">
              <p>Node.Js</p>
              <p>
                Node.js is an open-source, cross-platform, JavaScript runtime
                environment that executes JavaScript code outside a web browser.
                Node.js lets developers use JavaScript to write command line
                tools and for server-side scripting—running scripts server-side
                to produce dynamic web page content before the page is sent to
                the user's web browser.
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asidescss">
            <header></header>

            <div className="profile-bio">
              <p>SCSS</p>
              <p>
                Sass (short for syntactically awesome style sheets) is a style
                sheet language. Used for advanced styling of web applications.{" "}
              </p>
            </div>
          </aside>{" "}
        </div>
        <div className="col-sm ">
          <aside className="profile-card asideredux">
            <header></header>

            <div className="profile-bio">
              <p>Redux</p>
              <p>
                Redux is an open-source JavaScript library for managing
                application state. It is most commonly used with libraries such
                as React or Angular for building user interfaces. Similar to
                (and inspired by) Facebook's Flux architecture
              </p>
            </div>
          </aside>{" "}
        </div>
      </motion.div>
      <div className="row">
        
      </div>
      <br />
    </div>
    <p className="projectpagetitle">My online presence</p>
    <Row>
      <div className="item">
        <a
          href="https://github.com/Imstupidpleasehelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skillimage" src="./images/github.png" alt="" />
          <div className="item-content">
            <p>Github</p>
          </div>
        </a>
      </div>
      <div className="item">
        <a
          href="https://stackoverflow.com/users/13569082/imstupidpleasehelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skillimage" src="./images/stackoverflow.png" alt="" />
          <div className="item-content">
            <p>Stackoverflow Programming forum</p>
          </div>
        </a>
      </div>
      <div className="item">
        <a
          href="https://www.linkedin.com/in/dylan-bozarth-65a3581b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skillimage" src="./images/linkedin.png" alt="" />
          <div className="item-content">
            <p>
              LinkedIn
            </p>
          </div>
        </a>
      </div>
    </Row>
  </motion.div>
);