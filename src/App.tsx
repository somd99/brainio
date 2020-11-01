import "./tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import DashBoard from "./dashboard/dashboard";
import LoadGame from './game/loadgame'
import MainGame from "./game/maingame";
import MainGame2 from "./game/maingame2";
import MainGame5 from "./game/maingame5";
import Overview from "./Overview";
import Page from "./Page";
import React from "react";
import Result from "./result/result";
import ResultFail from "./result/result_fail";
import Tab from "./Tab";

function App() {
  return (
    <Router>
      <div className="body">
        <Switch>
          <Route path="/dashboard">
            <Overview />
            <DashBoard/>
          </Route>
          <Route path="/game1">
            <MainGame></MainGame>
          </Route>
          <Route path="/game2">
            <MainGame2></MainGame2>
          </Route>
          <Route path="/game5">
            <MainGame5></MainGame5>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
          <Route path="/plan">
            <Page/>
          </Route>
          <Route path="/load">
            <LoadGame/>
          </Route>
          <Route path="/fail">
            <ResultFail/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
