import "./tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import DashBoard from "./dashboard/dashboard";
import MainGame from "./game/maingame";
import MainGame2 from "./game/maingame2";
import MainGame3 from "./game/maingame3";
import MainGame4 from "./game/maingame4";
import MainGame5 from "./game/maingame5";
import Overview from "./Overview";
import Page from "./Page";
import React from "react";
import Result from "./result/result";

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
          <Route path="/game3">
            <MainGame3></MainGame3>
          </Route>
          <Route path="/game4">
            <MainGame4></MainGame4>
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
        </Switch>
    </div>
    </Router>
  );
}

export default App;
