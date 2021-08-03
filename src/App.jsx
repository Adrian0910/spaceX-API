import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { ErrorMatch } from "./ErrorMatch";



export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          
            <Route exact path="/" component={Home} />
          
          <Route exact path="/about" component={About} />
  
          <Route component={ErrorMatch} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
