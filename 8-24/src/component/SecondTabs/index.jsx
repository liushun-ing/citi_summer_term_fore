import React, { useState } from "react";
import "./index.css";
import TabItem from "../TabItem";

const TAB_ITEMS = [
  {
    label: 0,
    value: "1D",
    active: false,
  },
  {
    label: 1,
    value: "1W",
    active: false,
  },
  {
    label: 2,
    value: "2W",
    active: false,
  },
  {
    label: 3,
    value: "1M",
    active: false,
  },
  {
    label: 4,
    value: "3M",
    active: false,
  },
  {
    label: 5,
    value: "6M",
    active: false,
  },
  {
    label: 6,
    value: "1Y",
    active: false,
  },
  {
    label: 7,
    value: "YTD",
    active: false,
  },
];

export default function SecondTabs(props) {
  const { fre, selectFre } = props;

  const [tabItems, setTabItems] = useState(
    TAB_ITEMS.map((item) => {
      if (item.label == fre) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    })
  );

  // 第二个标签栏点击事件
  function onClickHandler(event) {
    console.log(event);
    const selected = event.target.dataset.value;
    tabItems.forEach((item) => {
      item.active = item.label == selected ? true : false;
    });
    setTabItems(JSON.parse(JSON.stringify(tabItems)));
    selectFre(selected);
  }

  return (
    <div>
      <div className="tabs-wrapper-1" onClick={onClickHandler}>
        {tabItems.map((tabItem) => {
          return <TabItem key={tabItem.label} {...tabItem}></TabItem>;
        })}
      </div>
    </div>
  );
}
