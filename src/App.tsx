import "./tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Page from "./Page";

import React from "react";
import Result from "./result/result";
import Overview from "./Overview";
import Tab from "./Tab";


function App() {
  return (
    <div className="body">
      <Overview />
      <Page/>
      <Tab/>
    </div>
  );
}

export default App;
