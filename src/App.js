import React from "react";

import SearchEngine from "./searchEngine";
import TodaysData from "./todaysData";
import TodaysDescription from "./todaysDescription";
import Impressum from "./impressum";

export default function App() {
  return (
    <div className="wholeApplication">
      <SearchEngine />
      <div className="row">
        <div className="col-12">
          <div className="today">
            <div className="firstDay">
              <div className="card rounded">
                <div className="card-body" id="first-day">
                  <TodaysData />
                  <TodaysDescription />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Impressum />
    </div>
  );
}
