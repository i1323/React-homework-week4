import React from "react";

import App from "./App";

import "./index.css";

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

Content;
