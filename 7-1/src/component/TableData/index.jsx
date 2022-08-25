import React, { useEffect, useState } from "react";
import "./index.css";
import PubSub from "pubsub-js";
import utils from "../../utils/util.js";
import SummaryItem from "../SummaryItem";

export default function TableData() {
  const [selected, setSelected] = useState(0);
  const [tableData, setTableData] = useState({ dataList: [] });

  useEffect(() => {
    utils
      .getTableData(selected)
      .then((res) => {
        setTableData(res);
      })
      .catch((err) => {
        console.log(err);
        alert("获取失败");
      });
    PubSub.subscribe("seletedTable", (_, data) => {
      // 这里不能用改了之后的state
      utils
        .getTableData(data.newSelected)
        .then((res) => {
          setTableData(res);
        })
        .catch((err) => {
          console.log(err);
          alert("获取失败");
        });
    });
  }, []);

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Client Name</th>
              <th>Client Side</th>
              <th>Ticker</th>
              <th>RIC</th>
              <th>Size</th>
              <th>Prize</th>
              <th>National USD</th>
              <th>Currency</th>
              <th>Issuer Sector</th>
              <th>Salesperson</th>
              <th>HT/PT</th>
            </tr>
          </thead>
          <tbody>
            {tableData.dataList.map((line) => {
              return (
                <tr key={line.id}>
                  <td>{line.date}</td>
                  <td>{line.clientName}</td>
                  <td
                    className={
                      line.clientSide === "Buy"
                        ? "data-green"
                        : line.clientSide === "Sell"
                        ? "data-red"
                        : ""
                    }
                  >
                    {line.clientSide}
                  </td>
                  <td>{line.ticker}</td>
                  <td>{line.ric}</td>
                  <td>{line.size}</td>
                  <td>{line.prize}</td>
                  <td>{line.nationalUsd}</td>
                  <td>{line.currency}</td>
                  <td>{line.issuerSector}</td>
                  <td>{line.salesperson}</td>
                  <td>{line.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="data-wrapper">
          <div className="data-items">
            <SummaryItem
              className="data-green"
              label="Total Buy: "
              value={tableData.totalBuy}
            ></SummaryItem>
            <SummaryItem
              className="data-red"
              label="Total Sell: "
              value={tableData.totalSell}
            ></SummaryItem>
            <SummaryItem
              className="data-blue"
              label="Net Quantity: "
              value={tableData.netQuantity}
            ></SummaryItem>
            <SummaryItem
              className="data-green"
              label="Total Buy National: "
              value={tableData.totalBuyNational}
            ></SummaryItem>
            <SummaryItem
              className="data-red"
              label="Total Sell National: "
              value={tableData.totalSellNational}
            ></SummaryItem>
            <SummaryItem
              className="data-blie"
              label="Net National: "
              value={tableData.netNational}
            ></SummaryItem>
          </div>
          <div>
            <span className="data-records">Records: {tableData.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
