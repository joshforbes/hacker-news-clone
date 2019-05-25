import React from "react";
import Top from "./Top";
import PostComments from "./PostComments";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/post/:id" component={PostComments} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
