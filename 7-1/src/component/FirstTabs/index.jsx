import React, { useEffect, useState } from "react";
import "./index.css";
import PubSub from "pubsub-js";

export default function FirstTabs() {

  const [tableIndex, setTableIndex] = useState(0);

  function onClickHandler(event) {
    const index = event.target.dataset.value;
    setTableIndex(index);
    PubSub.publish("seletedMode", { newSelectedMode: index });
  };

  return (
    <div>
      <div className="tabs-wrapper" onClick={onClickHandler}>
        <div data-value="0" className={tableIndex == 0 ? "tab-item active": "tab-item"}>
          Traditional Trade
        </div>
        <div data-value="1" className={tableIndex == 1 ? "tab-item active": "tab-item"}>
          NLP Trade
        </div>
      </div>
    </div>
  );
}
