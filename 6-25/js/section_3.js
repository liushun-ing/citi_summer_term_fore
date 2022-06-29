import formatTime from "./util.js";

let dateList = [
  "2001-03-12",
  "2001-03-13",
  "2001-03-14",
  "2001-03-15",
  "2001-03-16",
  "2001-03-17",
  "2001-03-18",
  "2001-03-19",
  "2001-03-20",
  "2001-03-21",
  "2001-03-22",
  "2001-03-23",
];
let buySeries = [
  59.9, 71.5, 106.4, 159.2, 144.0, 176.0, 115.6, 148.5, 276.4, 194.1, 195.6,
  24.4,
];
let sellSeries = [
  -49.9, -71.5, -126.4, -129.2, -144.0, -156.0, -135.6, -198.5, -216.4, -194.1,
  -95.6, -54.4,
];

// 获取数据


let dateSeries = (() => {
  dateList.forEach((item, index) => {
    dateList[index] = formatTime(item);
  });
  return dateList;
})();

let cumulationSeries = (() => {
  let newArray = Array.from(buySeries);
  for (let i = 0; i < buySeries.length; i++) {
    newArray[i] += sellSeries[i];
  }
  return newArray;
})();

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
