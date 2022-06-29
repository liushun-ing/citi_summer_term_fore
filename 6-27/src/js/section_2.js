// 第二部分，分割线一下，标签栏和表格
import api from "../api/api.js";

const getTableData = async (selected) => {
  try {
    let res = {};
    if (selected % 2 == 0) {
      res = await api.getData();
    } else {
      res = await api.getData1();
    }
    let table = document.getElementsByTagName("table")[0];
    let trChildrenLength = table.children.length;
    // 首先需要把原来的去掉
    for (let j = 0; j < trChildrenLength - 1; j++) {
      table.removeChild(table.lastChild);
    }
    // 然后替换为新的
    for (let i = 0; i < res.total; i++) {
      let trDom = document.createElement("tr");
      for (let tdItem of Object.values(res.dataList[i])) {
        if (tdItem == "Buy") {
          trDom.innerHTML += `<td class="data-green">${tdItem}</td>`;
        } else if (tdItem == "Sell") {
          trDom.innerHTML += `<td class="data-red">${tdItem}</td>`;
        } else {
          trDom.innerHTML += `<td>${tdItem}</td>`;
        }
      }
      table.appendChild(trDom);
    }
    // 然后设置下面的data数据
    const data_items = document.getElementById("data-items");
    data_items.innerHTML = `
      <span class="data-item"><span class="data-green">Total Buy: </span>${res.totalBuy}</span>
      <span class="data-item"><span class="data-red">Total Sell: </span>${res.totalSell}</span>
      <span class="data-item"><span class="data-blue">Net Quantity: </span>${res.netQuantity}</span>
      <span class="data-item"><span class="data-green">Total Buy National: </span>${res.totalBuyNational}</span>
      <span class="data-item"><span class="data-red">Total Sell National: </span>${res.totalSellNational}</span>
      <span class="data-item"><span class="data-blue">Net National: </span>${res.netNational}</span>
    `;
    document.getElementsByClassName(
      "data-records"
    )[0].innerText = `Records: ${res.total}`;
  } catch (error) {
    alert("获取失败");
    console.log(error);
  }
};

export default getTableData;
