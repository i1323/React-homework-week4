import React from "react";

export default function todaysData() {
  return (
    <div className="row">
      <div className="col-6">
        <h2 id="currentCity"> Salzburg </h2>
      </div>
      <div className="col-6">
        <h3 className="text-right" id="todayIsThisDay">
          Tuesday 15:53
        </h3>
      </div>
    </div>
  );
}
