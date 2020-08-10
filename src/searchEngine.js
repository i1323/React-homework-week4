import React from "react";

export default function searchEngine() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Search your favourite City..."
            className="form-control"
            id="city-input"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <input type="submit" value="🔍" className="btn btn-light w-50" />
        </div>
      </div>
    </form>
  );
}
