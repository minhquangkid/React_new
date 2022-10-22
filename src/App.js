import { Fragment, useReducer, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Increase from "./Increase";
import TestInput from "./testInput";
import Home from "./Home";
import Something from "./something";
import { Switch } from "react-router-dom";
import One from "./one";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <TestInput />
          <Increase />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home/:id">
          <Something />
        </Route>
      </Switch>
      <One />
    </Fragment>
  );
}

export default App;
