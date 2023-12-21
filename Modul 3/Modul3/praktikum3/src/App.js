import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
