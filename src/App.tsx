import "./tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';
import Page from './Page';

import DashBoard from "./dashboard/dashboard";
import MainGame from "./game/maingame";
import MainGame2 from "./game/maingame2";
import MainGame3 from "./game/maingame3";
import MainGame4 from "./game/maingame4";
import MainGame5 from "./game/maingame5";
import Page from "./Page";
import React from "react";
import Result from "./result/result";

function App() {
  return (
    <div className="body">
      {/* <Page /> */}
      {/* <DashBoard></DashBoard> */}
      {/* <MainGame></MainGame> */}
      {/* <MainGame2></MainGame2> */}
      {/* <MainGame3></MainGame3> */}
      {/* <MainGame4></MainGame4> */}
      {/* <MainGame5></MainGame5> */}
      <Result/>

     <Page/>
    </div>
  );
}

export default App;