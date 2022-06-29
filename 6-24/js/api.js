import fetcher from "./fetch.js";

const api = {
  getData: () => {
    return fetcher({
      url: "./assets/data.json",
      method: "GET",
      params: {},
    });
  },
  getData1: () => {
    return fetcher({
      url: "./assets/data1.json",
      method: "GET",
      params: {},
    });
  },
};

export default api;
