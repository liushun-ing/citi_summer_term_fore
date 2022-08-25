// 第二部分，分割线一下，标签栏和表格
import api from "../api/api.js";

const getTableData = async (selected) => {
  try {
    let res = {};
    if (selected % 2 == 0) {
      res = await api.getTable1Data();
    } else {
      res = await api.getTable2Data();
    }
    return res;
  } catch (error) {
    alert("获取失败");
    console.log(error);
  }
};

const isNotEmpty = (form) => {
  for (let key in Object.keys(form)) {
    if (form[key] == "") {
      return false;
    }
  }
  return true;
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()

  // return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  return `${[day, month, year].map(formatNumber).join("/")}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

export default {
  formatTime,
  getTableData,
  isNotEmpty,
};
