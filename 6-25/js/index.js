import "./section_1.js";
import getTableData from "./section_2.js";
import "./section_3.js";

import "../css/index.css";

// 初始化数据
getTableData(0);

if (module.hot) {
  module.hot.accept();
}
