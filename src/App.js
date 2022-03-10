import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home/home.js";
import "./App.scss";

function App() {

  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App" data-testid="app">  
            <Route exact path="/" component={Home} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
