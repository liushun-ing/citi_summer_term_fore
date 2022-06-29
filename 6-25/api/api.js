import fetcher from "./fetch.js";

const api = {
  getData: () => {
    return fetcher({
      url: "/6-24/assets/data.json",
      method: "GET",
      params: {},
    });
  },

  getData1: () => {
    return fetcher({
      url: "/6-24/assets/data1.json",
      method: "GET",
      params: {},
    });
  },

  buyStock: (params) => {
    return fetcher({
      url: "/6-24/assets/buyStock",
      method: "POST",
      params: params,
    });
  },

  sellStock: (params) => {
    return fetcher({
      url: "/6-24/assets/sellStock",
      method: "POST",
      params: params,
    });
  },
  
  nlp: (params) => {
    return fetcher({
      url: "/6-24/assets/nlp",
      method: "POST",
      params: params,
    });
  },
};

export default api;
