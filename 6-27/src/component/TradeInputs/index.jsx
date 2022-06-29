import React, { useEffect, useState } from "react";
import api from "../../api/api.js";
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
  const [selectedMode, setSelectedMode] = useState(0);
  const [nlpWords, setNlpWords] = useState("");
  const [dealForm, setDealForm] = useState({
    clientName: "",
    ticker: "",
    ric: "",
    size: "",
    price: "",
    currency: "",
    issuerSector: "",
    salesperson: "",
    type: "--select--",
  });

  useEffect(() => {
    PubSub.subscribe("seletedMode", (_, data) => {
      setSelectedMode(data.newSelectedMode);
    });
  }, []);

  // 为所有输入框绑定该事件
  function inputHandler(event) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    if (value != "" && !(name == "type" && value == "--select--")) {
      let newDealForm = JSON.parse(JSON.stringify(dealForm));
      newDealForm[name] = value;
      setDealForm(newDealForm);
    }
  }

  function nlpInputHandler(event) {
    setNlpWords(event.currentTarget.value);
  }

  async function buyStockHandler() {
    if (Object.keys(dealForm).length < 9) {
      alert("信息不完整");
    } else {
      try {
        const res = await api.buyStock(dealForm);
        if (res.code == 2000) {
          setDealForm({
            clientName: "",
            ticker: "",
            ric: "",
            size: "",
            price: "",
            currency: "",
            issuerSector: "",
            salesperson: "",
            type: "--select--",
          });
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

  async function sellStockHandler() {
    if (Object.keys(dealForm).length < 9) {
      alert("信息不完整");
    } else {
      try {
        const res = await api.sellStock(dealForm);
        if (res.code == 2000) {
          setDealForm({
            clientName: "",
            ticker: "",
            ric: "",
            size: "",
            price: "",
            currency: "",
            issuerSector: "",
            salesperson: "",
            type: "--select--",
          });
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
          setNlpWords("");
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
      <div
        className="action-div"
        style={{ height: selectedMode == 0 ? "116px" : "58px" }}
      >
        <div className={selectedMode == 0 ? "action0" : "action0 hidden-class"}>
          <div className="action-wrapper">
            <div className="action-left">
              {labels.map((item, index) => (
                <div key={index} className="action-item">
                  <div className="action-label">{item[0]}</div>
                  <input
                    className="action-input"
                    type="text"
                    value={dealForm[item[1]]}
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
                  value={dealForm.type}
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
                sell
              </button>
            </div>
          </div>
        </div>
        <div className={selectedMode == 1 ? "action1" : "action1 hidden-class"}>
          <div className="action-wrapper">
            <div className="action-item">
              <div className="action-label">NLP Trade</div>
              <input
                className="action-input-nlp"
                type="text"
                name="nlpWords"
                placeholder="text input"
                value={nlpWords}
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
