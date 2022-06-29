import React, { useEffect, useState } from "react";
import "./index.css";
import PubSub from "pubsub-js";

export default function SecondTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  // 第二个标签栏点击事件
  async function onClickHandler(event) {
    const selected = event.target.dataset.value;
    setTabIndex(selected);
    PubSub.publish("seletedTable", { newSelected: selected });
  }

  return (
    <div>
      <div className="tabs-wrapper-1" onClick={onClickHandler}>
        <div
          data-value="0"
          className={tabIndex == 0 ? "tab-item-1 active" : "tab-item-1"}
        >
          1D
        </div>
        <div
          data-value="1"
          className={tabIndex == 1 ? "tab-item-1 active" : "tab-item-1"}
        >
          1W
        </div>
        <div
          data-value="2"
          className={tabIndex == 2 ? "tab-item-1 active" : "tab-item-1"}
        >
          2W
        </div>
        <div
          data-value="3"
          className={tabIndex == 3 ? "tab-item-1 active" : "tab-item-1"}
        >
          1M
        </div>
        <div
          data-value="4"
          className={tabIndex == 4 ? "tab-item-1 active" : "tab-item-1"}
        >
          3M
        </div>
        <div
          data-value="5"
          className={tabIndex == 5 ? "tab-item-1 active" : "tab-item-1"}
        >
          6M
        </div>
        <div
          data-value="6"
          className={tabIndex == 6 ? "tab-item-1 active" : "tab-item-1"}
        >
          1Y
        </div>
        <div
          data-value="7"
          className={tabIndex == 7 ? "tab-item-1 active" : "tab-item-1"}
        >
          YTD
        </div>
      </div>
    </div>
  );
}
