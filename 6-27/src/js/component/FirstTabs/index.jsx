import React from "react";
import "./index.css";

export default function FirstTabs() {
  function onClickHandler(event) {
    const type = event.target.dataset.value;
    if (type === "tra") {
      document.getElementsByClassName("action-div")[0].style.height = "116px";
      document
        .getElementsByClassName("action0")[0]
        .classList.remove("hidden-class");
      document
        .getElementsByClassName("action1")[0]
        .classList.add("hidden-class");
      document.getElementsByClassName("tab-item")[0].classList.add("active");
      document.getElementsByClassName("tab-item")[1].classList.remove("active");
    } else {
      document.getElementsByClassName("action-div")[0].style.height = "58px";
      document
        .getElementsByClassName("action0")[0]
        .classList.add("hidden-class");
      document
        .getElementsByClassName("action1")[0]
        .classList.remove("hidden-class");
      document.getElementsByClassName("tab-item")[1].classList.add("active");
      document.getElementsByClassName("tab-item")[0].classList.remove("active");
    }
  };

  return (
    <div>
      <div className="tabs-wrapper" onClick={onClickHandler}>
        <div data-value="tra" className="tab-item active">
          Traditional Trade
        </div>
        <div data-value="nlp" className="tab-item">
          NLP Trade
        </div>
      </div>
    </div>
  );
}
