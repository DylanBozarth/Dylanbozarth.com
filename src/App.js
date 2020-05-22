import React from "react";
import { Navigation } from "./components/navbar";
import "./App.scss";
import { Homepage } from "./pages/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./pages/projects";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navigation />
        <div className="sliderdiv">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
