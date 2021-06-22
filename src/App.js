import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
