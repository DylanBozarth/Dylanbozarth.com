import React from "react";
import { Navigation } from "./components/navbar";
import "./App.css";
import  Homepage  from "./pages/homepage";
import { BrowserRouter as  Switch, Route, useLocation, Redirect } from "react-router-dom";
import  Projects  from "./pages/projects";
import { Skills } from "./pages/skills";
import { Testimonials } from "./pages/Testimonials";
import Hireme from "./pages/hireme";
import { AnimatePresence, motion } from "framer-motion";
import { SkylimitFocus } from "./components/focuspages/skylimitfocus";
import {PowerstrokeFocus} from './components/focuspages/powerstrokefocus'
import { Weaponsshopfocus } from "./components/focuspages/weaponsshopfocus";
import { ThiswebsiteFocus } from "./components/focuspages/thiswebsitefocus";
import { JymrDoodlesFocus } from "./components/focuspages/jymrdoodlesfocus";
import UseFavicon from './components/useFavicon'
import { Jsquizfocus } from "./components/focuspages/jsquizfocus";
import { Weatherappfocus } from "./components/focuspages/weatherappfocus";
 import  {pizzaFocus} from './components/focuspages/pizzaFocus'
import { Todo } from "./components/todo";
import { SolarsystemFocus } from "./components/solarsystem";
import {BitcoinFocus} from './components/focuspages/bitcoinfocus'
import { RestFocus } from "./components/focuspages/restFocus";
import { Dadfocus } from "./components/focuspages/dadfocus";
import { Fourohfour } from "./pages/404";
import { MyPetFocus } from "./components/focuspages/mypetfocus";
function App() {
  const location = useLocation();
  
 UseFavicon('./images/Dicon.png')
  return (
   
      <motion.div className="wrapper">
        <Navigation />{" "}
       
        <div className="backgroundclass">
        <div className="stars"></div>
<div className="twinkling"></div>
<div className="clouds"></div>
        </div>
         
          <AnimatePresence exitBeforeEnter={true}> 
            <Switch location={location} key={location.pathname}>
               <Route exact path="/" component={Homepage} /> 
              <Route path="/Projects" component={Projects} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/hireme" component={Hireme} />
              <Route path="/skylimit" component={SkylimitFocus} />
              <Route  path="/dadabase" component={Dadfocus} /> 
              <Route path="/powerstroke" component={PowerstrokeFocus} />
              <Route path="/weaponsshop" component={Weaponsshopfocus} />
              <Route path="/portfolio" component={ThiswebsiteFocus} />
              <Route path="/doodles" component={JymrDoodlesFocus} />
              <Route path="/jsquiz" component={Jsquizfocus} />
              <Route path="/weather" component={Weatherappfocus} />
              <Route path="/pizza" component={pizzaFocus} />
              <Route path="/todo" component={Todo} />
              <Route path="/rest" component={RestFocus} />
              <Route path="/solarsystem" component={SolarsystemFocus} />
              <Route path="/bitcoin" component={BitcoinFocus} />
              <Route path="/mypet" component={MyPetFocus} />
             {/*  <Route component={Fourohfour} /> */}
            </Switch>
          </AnimatePresence>
          
      </motion.div>
    
  );
}

export default App;
