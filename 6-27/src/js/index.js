// import "./section_1.js";
// import getTableData from "./section_2.js";
// import "./section_3.js";

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./container/App/index.jsx";
import "../css/index.css";

(() => {
  ReactDOM.render(<App/>, document.getElementById('app'))
})();

// 初始化数据
// getTableData(0);

if (module.hot) {
  module.hot.accept();
}
