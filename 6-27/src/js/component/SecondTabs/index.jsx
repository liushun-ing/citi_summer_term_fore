import React from "react";
import "./index.css";
import getTableData from "../../section_2.js";

export default function SecondTabs() {
  // 第二个标签栏点击事件
  async function onClickHandler(event) {
    const selected = event.target.dataset.value;
    const items = Array.from(document.getElementsByClassName("tab-item-1"));
    items.forEach((item, index) => {
      item.classList.remove("active");
      if (index == selected) {
        item.classList.add("active");
      }
    });
    getTableData(selected);
  }

  return (
    <div>
      <div className="tabs-wrapper-1" onClick={onClickHandler}>
        <div data-value="0" className="tab-item-1 active">
          1D
        </div>
        <div data-value="1" className="tab-item-1">
          1W
        </div>
        <div data-value="2" className="tab-item-1">
          2W
        </div>
        <div data-value="3" className="tab-item-1">
          1M
        </div>
        <div data-value="4" className="tab-item-1">
          3M
        </div>
        <div data-value="5" className="tab-item-1">
          6M
        </div>
        <div data-value="6" className="tab-item-1">
          1Y
        </div>
        <div data-value="7" className="tab-item-1">
          YTD
        </div>
      </div>
    </div>
  );
}
