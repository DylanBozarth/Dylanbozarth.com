import React, { useState } from "react";
import { Navigation } from "./components/navbar";
import "./App.css";
import Homepage from "./pages/homepage";
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import Projects from "./pages/freelance";
import { Skills } from "./pages/skills";
import { AnimatePresence, motion } from "framer-motion";
import { SkylimitFocus } from "./pages/focuspages/skylimitfocus";
import { PowerstrokeFocus } from "./pages/focuspages/powerstrokefocus";
import { Weaponsshopfocus } from "./pages/focuspages/weaponsshopfocus";
import { JymrDoodlesFocus } from "./pages/focuspages/jymrdoodlesfocus";
import { Weatherappfocus } from "./pages/focuspages/weatherappfocus";
import { pizzaFocus } from "./pages/focuspages/pizzaFocus";
import { SolarsystemFocus } from "./pages/focuspages/solarsystem";
import { MyPetFocus } from "./pages/focuspages/mypetfocus";
import  { Personal } from "./pages/personal";
import { Dino } from "./pages/focuspages/dinofocus";

function App() {
  const location = useLocation();
  const [buttonOn, setButtonOn] = useState(0);
  return (
    <motion.div className="wrapper">
      <Navigation buttonOn={buttonOn} setButtonOn={setButtonOn} />{" "}
      <div className="backgroundclass">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={(props) => (
              <Homepage
                {...props}
                setButtonOn={setButtonOn}
                buttonOn={buttonOn}
              />
            )}
          />
          <Route path="/Projects" component={Projects} />
          <Route path="/otherProjects" component={Personal} />
          {/* this was done before I knew how to do procedural routing, don't judge */}
          <Route path="/Skills" component={Skills} />
          <Route path="/skylimit" component={SkylimitFocus} />
          <Route path="/powerstroke" component={PowerstrokeFocus} />
          <Route path="/weaponsshop" component={Weaponsshopfocus} />
          <Route path="/doodles" component={JymrDoodlesFocus} />
          <Route path="/weather" component={Weatherappfocus} />
          <Route path="/pizza" component={pizzaFocus} />
          <Route path="/solarsystem" component={SolarsystemFocus} />
          <Route path="/mypet" component={MyPetFocus} />

          <Route path="/dino" component={Dino} />
          {/*  <Route component={Fourohfour} /> */}
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
