import React from "react";
import "./index.css";

export default function TableData() {
  return (
    <div>
      <div className="table-wrapper">
        <table>
          <tr>
            <th>Date</th>
            <th>Client Name</th>
            <th>Client Side</th>
            <th>Ticker</th>
            <th>RIC</th>
            <th>Size</th>
            <th>Prize</th>
            <th>National USD</th>
            <th>Currency</th>
            <th>Issuer Sector</th>
            <th>Salesperson</th>
            <th>HT/PT</th>
          </tr>
        </table>
        <div className="data-wrapper">
          <div id="data-items">
            <span className="data-item"></span>
            <span className="data-item"></span>
            <span className="data-item"></span>
            <span className="data-item"></span>
            <span className="data-item"></span>
            <span className="data-item"></span>
          </div>
          <div>
            <span className="data-records"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
