import React from "react";
import { Navigation } from "./components/navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Homepage  from "./pages/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Projects  from "./pages/projects";
import { Skills } from "./pages/skills";
import { Testimonials } from "./pages/Testimonials";
import Hireme from "./pages/hireme";
import { Stars } from "./components/stars";
import { AnimatePresence, motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { SkylimitFocus } from "./components/skylimitfocus";
import {PowerstrokeFocus} from './components/powerstrokefocus'
import { Weaponsshopfocus } from "./components/weaponsshopfocus";

function App() {
 
  return (
    <Router>
      <motion.div className="wrapper">
        <Navigation />{" "}
        <div className="backgroundclass">
         <Stars />
        </div>
        <div className="sliderdiv">
         
          <AnimatePresence > {/* this is where we control animations */}
            <Switch>
               <Route exact path="/" component={Homepage} /> 
              <Route path="/Projects" component={Projects} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/hireme" component={Hireme} />
              <Route path="/skylimit" component={SkylimitFocus} />
              <Route path="/powerstroke" component={PowerstrokeFocus} />
              <Route path="/weaponsshop" component={Weaponsshopfocus} />
            </Switch>
          </AnimatePresence>
          
        </div>
      </motion.div>
    </Router>
  );
}

export default App;
