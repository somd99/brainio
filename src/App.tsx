import "./tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Page from "./Page";

import React from "react";
import Result from "./result/result";
import Overview from "./Overview";

function App() {
  return (
    <div className="body">
      <Overview />
      <Page/>
    </div>
  );
}

export default App;
