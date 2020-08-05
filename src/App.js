import React from "react";
import { Navigation } from "./components/navbar";
import "./App.scss";
import { Homepage } from "./pages/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";
import { Testimonials } from "./pages/Testimonials";
import { Footer } from "./components/footer";
import Hireme from "./pages/hireme";
import { Stars } from "./components/stars";
import { AnimatePresence, motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
 
  return (
    <Router>
      <motion.div className="wrapper">
        <Navigation />{" "}
        <div className="backgroundclass">
          <Stars />
        </div>
        <div className="sliderdiv">
         
          <AnimatePresence exitBeforeEnter>
            <Switch>
               <Route exact path="/" component={Homepage} /> 
              <Route path="/Projects" component={Projects} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/hireme" component={Hireme} />
            </Switch>
          </AnimatePresence>
          <Footer />
        </div>
      </motion.div>
    </Router>
  );
}

export default App;
