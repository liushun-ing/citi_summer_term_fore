import fetcher from "./fetch.js";

const api = {
  getTable1Data: () => {
    return fetcher({
      url: "/assets/table1.json",
      method: "GET",
      params: {},
    });
  },

  getTable2Data: () => {
    return fetcher({
      url: "/assets/table2.json",
      method: "GET",
      params: {},
    });
  },

  buyStock: (params) => {
    return fetcher({
      url: "/buyStock",
      method: "POST",
      params: params,
    });
  },

  sellStock: (params) => {
    return fetcher({
      url: "/sellStock",
      method: "POST",
      params: params,
    });
  },
  
  nlp: (params) => {
    return fetcher({
      url: "/nlp",
      method: "POST",
      params: params,
    });
  },

  getChartData: () => {
    return fetcher({
      url: "/assets/chart.json",
      method: "GET",
      params: {},
    });
  }
};

export default api;
