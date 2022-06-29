import React from "react";
import api from "../../../api/api.js";
import "./index.css";

const labels = [
  ["Client name", "clientName"],
  ["Ticker", "ticker"],
  ["RIC", "ric"],
  ["Size", "size"],
  ["Price", "price"],
  ["Currency", "currency"],
  ["Issuer Sector", "issuerSector"],
  ["Salesperson", "salesperson"],
];

export default function TradeInputs() {
  // 第一部分，分割线以上的部分逻辑

  let dealForm = {};
  let nlpWords = "";

  // 为所有输入框绑定该事件
  function inputHandler(event) {
    if (
      event.currentTarget.value != "" &&
      !(
        event.currentTarget.name == "type" &&
        event.currentTarget.value == "--select--"
      )
    ) {
      dealForm[`${event.currentTarget.name}`] = event.currentTarget.value;
    }
  }

  function nlpInputHandler(event) {
    nlpWords = event.currentTarget.value;
  }

  async function buyStockHandler(event) {
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
  }

  async function sellStockHandler(event) {
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
  }

  async function nlpHandler(event) {
    if (!nlpWords) {
      alert("请填写nlp关键字");
    } else {
      try {
        const res = await api.nlp({
          nlpWords: nlpWords,
        });
        if (res.code == 2000) {
          nlpWords = "";
          alert("nlp操作成功");
        } else {
          alert("nlp操作失败，请重试");
        }
      } catch (error) {
        alert("nlp分析失败");
        console.log(error);
      }
    }
  }

  return (
    <div>
      <div className="action-div">
        <div className="action0">
          <div className="action-wrapper">
            <div className="action-left">
              {labels.map((item) => (
                <div className="action-item">
                  <div className="action-label">{item[0]}</div>
                  <input
                    className="action-input"
                    type="text"
                    name={item[1]}
                    placeholder="text input"
                    onChange={inputHandler}
                  />
                </div>
              ))}
              <div className="action-item">
                <div className="action-label">HT/PT</div>
                <select
                  name="type"
                  className="action-input"
                  onChange={inputHandler}
                >
                  <option value="select">--select--</option>
                  <option value="HT">HT</option>
                  <option value="PT">PT</option>
                </select>
              </div>
            </div>
            <div className="action-right">
              <button
                className="action-button button-buy"
                onClick={buyStockHandler}
              >
                buy
              </button>
              <button
                className="action-button button-sell"
                onClick={sellStockHandler}
              >
                sale
              </button>
            </div>
          </div>
        </div>
        <div className="action1 hidden-class">
          <div className="action-wrapper">
            <div className="action-item">
              <div className="action-label">NLP Trade</div>
              <input
                className="action-input-nlp"
                type="text"
                name="nlpWords"
                placeholder="text input"
                onChange={nlpInputHandler}
              />
            </div>
            <button className="button-nlp" onClick={nlpHandler}>
              GO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
