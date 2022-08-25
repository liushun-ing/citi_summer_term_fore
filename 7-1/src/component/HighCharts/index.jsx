import React, { useEffect } from "react";
import utils from "../../utils/util.js";
import api from "../../api/api.js";

export default function HighCharts() {
  let dateList = [],
    buySeries = [],
    sellSeries = [],
    cumulationSeries = [];

  var Highcharts = require("highcharts");
  // 在 Highcharts 加载之后加载功能模块
  require("highcharts/modules/exporting")(Highcharts);

  useEffect(() => {
    async function fetchData() {
      const res = await api.getChartData();
      dateList = res.dateList;
      buySeries = res.buySeries;
      sellSeries = res.sellSeries;
      let dateSeries = [];
      for (let item in dateList) {
        dateSeries.push(utils.formatTime(item));
      }
      let newArray = Array.from(buySeries);
      for (let i = 0; i < buySeries.length; i++) {
        newArray[i] += sellSeries[i];
      }
      cumulationSeries = newArray;

      Highcharts.chart("container", {
        chart: {
          zoomType: "xy",
          backgroundColor: "#17202a",
        },
        title: {
          text: "买入与卖出统计",
          align: "center",
          style: {
            fontWeight: "bold",
            color: "#ffffff",
          },
        },
        // subtitle: {
        //   useHTML: true,
        //   text: '数据来源 1950 ~ 2100 年世界人口金字塔</a>',
        // },
        xAxis: [
          {
            lineWidth: 1,
            lineColor: "#243343",
            gridLineWidth: 1,
            gridLineColor: "#243343",
            labels: {
              align: "center",
              step: 4,
              style: {
                color: "#97afc6",
              },
            },
            title: {
              enabled: false,
            },
            tickmarkPlacement: "on",
            categories: dateSeries,
          },
        ],
        yAxis: [
          {
            lineWidth: 1,
            lineColor: "#243343",
            gridLineWidth: 1,
            gridLineColor: "#243343",
            // Primary yAxis
            labels: {
              format: "{value}$",
              style: {
                color: "#97afc6",
              },
            },
            title: {
              enabled: false,
            },
          },
          {
            // 显示在下侧的镜像 yAxis （通过 linkedTo 与第一个 yAxis 关联）
            lineWidth: 1,
            lineColor: "#243343",
            gridLineWidth: 1,
            gridLineColor: "#243343",
            opposite: true,
            reversed: false,
            linkedTo: 0,
            labels: {
              enabled: false,
            },
            title: {
              enabled: false,
            },
          },
          {
            lineWidth: 0,
            lineColor: "#243343",
            gridLineWidth: 0,
            gridLineColor: "#243343",
            labels: {
              enabled: false,
            },
            title: {
              enabled: false,
            },
          },
        ],

        // 绘图参数
        plotOptions: {
          series: {
            borderWidth: "0",
            stacking: "normal",
          },
        },
        // 数据提示框
        tooltip: {
          shared: true,
          backgroundColor: "#ffffff",
        },
        // 浮窗
        legend: {
          layout: "vertical",
          align: "right",
          x: -60,
          verticalAlign: "top",
          y: 60,
          floating: true,
          backgroundColor: "#FFFFFF",
        },
        series: [
          {
            name: "Buy",
            color: "#00b0b9",
            type: "column",
            data: buySeries,
          },
          {
            name: "Sell",
            type: "column",
            color: "#06848d",
            data: sellSeries,
          },
          {
            name: "Cumulative Net",
            type: "line",
            color: "#ed8b00",
            lineWidth: 1,
            data: cumulationSeries,
          },
        ],
      });
    }
    fetchData().catch((err) => {
      console.log("charts", err);
      alert("获取失败");
    });
  }, []);

  return (
    <div>
      <div id="container"></div>
    </div>
  );
}
