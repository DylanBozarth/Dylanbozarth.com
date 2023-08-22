import React, { useState } from "react";
import { Navigation } from "./components/navbar";
import "./App.css";
import Homepage from "./pages/homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import { Freelance } from "./pages/freelance";
import { Skills } from "./pages/skills";
import { AnimatePresence, motion } from "framer-motion";
import { SkylimitFocus } from "./pages/focuspages/skylimitfocus";
import { PowerstrokeFocus } from "./pages/focuspages/powerstrokefocus";
import { Weaponsshopfocus } from "./pages/focuspages/weaponsshopfocus";
import { JymrDoodlesFocus } from "./pages/focuspages/jymrdoodlesfocus";
import { SolarsystemFocus } from "./pages/focuspages/solarsystem";
import { MyPetFocus } from "./pages/focuspages/mypetfocus";
import { Personal } from "./pages/personal";
import { Dino } from "./pages/focuspages/dinofocus";
import { OnGoing } from "./pages/ongoing";
import { AndromedaFocus } from "./pages/focuspages/andromedafocus";

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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage buttonOn={buttonOn} setButtonOn={setButtonOn} />} ></Route>
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/otherProjects" element={<Personal />} />
          <Route path="/ongoing" element={<OnGoing />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/skylimit" element={<SkylimitFocus />} />
          <Route path="/powerstroke" element={<PowerstrokeFocus />} />
          <Route path="/weaponsshop" element={<Weaponsshopfocus />} />
          <Route path="/doodles" element={<JymrDoodlesFocus />} />
          <Route path="/pizza" element={<pizzaFocus />} />
          <Route path="/solarsystem" element={<SolarsystemFocus />} />
          <Route path="/mypet" element={<MyPetFocus />} />
          <Route path="/dino" element={<Dino />} />
          <Route path="/andromeda" element={<AndromedaFocus />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
