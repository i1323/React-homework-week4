import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./App.css";

function Content() {
  return (
    <div className="wholeContent">
      <div className="weatherApp">
        <App />
        <div className="card-deck" id="whole-forecast" />
      </div>
    </div>
  );
}
