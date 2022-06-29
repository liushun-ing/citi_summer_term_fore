// 第一部分，分割线以上的部分逻辑
import api from "../api/api.js";

// 第一个标签栏点击事件
const tabs = document.getElementsByClassName("tabs-wrapper")[0];
tabs.addEventListener(
  "click",
  (event) => {
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
  },
  false
);

let dealForm = {};
let nlpWords = "";

// 为所有输入框绑定该事件
const inputItems = Array.from(document.getElementsByClassName("action-input"));
for (let item of inputItems) {
  item.addEventListener(
    "change",
    (event) => {
      if (
        event.currentTarget.value != "" &&
        !(
          event.currentTarget.name == "type" &&
          event.currentTarget.value == "--select--"
        )
      ) {
        dealForm[`${event.currentTarget.name}`] = event.currentTarget.value;
      }
    },
    false
  );
}

document.getElementsByClassName("action-input-nlp")[0].addEventListener(
  "change",
  (event) => {
    nlpWords = event.currentTarget.value;
  },
  false
);

// 按钮事件
document.getElementsByClassName("button-buy")[0].addEventListener(
  "click",
  async (event) => {
    if (Object.keys(dealForm).length < 9) {
      alert("信息不完整");
    } else {
      try {
        const res = await api.buyStock(dealForm);
        if (res.code == 2000) {
          dealForm = {};
          alert("购买成功");
        } else {
          alert("购买失败，请重试");
        }
      } catch (error) {
        alert("购买失败");
        console.log(error);
      }
    }
  },
  false
);

document.getElementsByClassName("button-sell")[0].addEventListener(
  "click",
  async (event) => {
    if (Object.keys(dealForm).length < 9) {
      alert("信息不完整");
    } else {
      try {
        const res = await api.sellStock(dealForm);
        if (res.code == 2000) {
          dealForm = {};
          alert("出售成功");
        } else {
          alert("出售失败，请重试");
        }
      } catch (error) {
        alert("出售失败");
        console.log(error);
      }
    }
  },
  false
);

document.getElementsByClassName("button-nlp")[0].addEventListener(
  "click",
  async (event) => {
    if (!nlpWords) {
      alert("请填写nlp关键字");
    } else {
      try {
        const res = await api.nlp({
          "nlpWords": nlpWords
        });
        if (res.code == 2000) {
          nlpWords = '';
          alert("nlp操作成功");
        } else {
          alert("nlp操作失败，请重试");
        }
      } catch (error) {
        alert("nlp分析失败");
        console.log(error);
      }
    }
  },
  false
);
