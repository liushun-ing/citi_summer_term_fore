import api from "./api.js";

// 第一个标签栏点击事件
const tabs = document.getElementsByClassName("tabs-wrapper")[0];
tabs.addEventListener("click", (event) => {
  const type = event.target.dataset.value;
  if (type === "tra") {
    document.getElementsByClassName("action-div")[0].style.height = "116px";
    document
      .getElementsByClassName("action0")[0]
      .classList.remove("hidden-class");
    document.getElementsByClassName("action1")[0].classList.add("hidden-class");
    document.getElementsByClassName("tab-item")[0].classList.add("active");
    document.getElementsByClassName("tab-item")[1].classList.remove("active");
  } else {
    document.getElementsByClassName("action-div")[0].style.height = "58px";
    document.getElementsByClassName("action0")[0].classList.add("hidden-class");
    document
      .getElementsByClassName("action1")[0]
      .classList.remove("hidden-class");
    document.getElementsByClassName("tab-item")[1].classList.add("active");
    document.getElementsByClassName("tab-item")[0].classList.remove("active");
  }
});

const getTableData = async (selected) => {
  try {
    let res = {};
    if (selected % 2 == 0) {
      res = await api.getData();
    } else {
      res = await api.getData1();
    }
    let table = document.getElementsByTagName("table")[0];
    let tr_children_length = table.children.length;
    // 首先需要把原来的去掉
    for (let j = 0; j < tr_children_length - 1; j++) {
      table.removeChild(table.lastChild);
    }
    // 然后替换为新的
    for (let i = 0; i < res.total; i++) {
      let tr_dom = document.createElement("tr");
      for (let td_item of Object.values(res.dataList[i])) {
        if(td_item == 'Buy') {
          tr_dom.innerHTML += `<td class="data-green">${td_item}</td>`;
        } else if (td_item == 'Sell') {
          tr_dom.innerHTML += `<td class="data-red">${td_item}</td>`;
        } else {
          tr_dom.innerHTML += `<td>${td_item}</td>`;
        }
      }
      table.appendChild(tr_dom);
    }
    // 然后设置下面的data数据
    const data_items = document.getElementById("data-items");
    data_items.innerHTML = `<span class="data-item"><span class="data-green">Total Buy: </span>${res.totalBuy}</span>
    <span class="data-item"><span class="data-red">Total Sell: </span>${res.totalSell}</span>
    <span class="data-item"><span class="data-blue">Net Quantity: </span>${res.netQuantity}</span>
    <span class="data-item"><span class="data-green">Total Buy National: </span>${res.totalBuyNational}</span>
    <span class="data-item"><span class="data-red">Total Sell National: </span>${res.totalSellNational}</span>
    <span class="data-item"><span class="data-blue">Net National: </span>${res.netNational}</span>`;
    document.getElementsByClassName(
      "data-records"
    )[0].innerText = `Records: ${res.total}`;
  } catch (error) {
    alert("获取失败");
    console.log(error);
  }
};

// 第二个标签栏点击事件
const tabs_sec = document.getElementsByClassName("tabs-wrapper-1")[0];
tabs_sec.addEventListener("click", (event) => {
  const selected = event.target.dataset.value;
  const items = Array.from(document.getElementsByClassName("tab-item-1"));
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index == selected) {
      item.classList.add("active");
    }
  });
  getTableData(selected);
});

// 初始化数据
getTableData(0);

if (module.hot) {
  module.hot.accept()
}
