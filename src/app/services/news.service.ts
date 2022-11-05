import axios from "axios";

const API_URL = `https://bing-news-search1.p.rapidapi.com/news`;

const options = {
  method: "GET",
  url: API_URL,
  params: { safeSearch: "Off", textFormat: "Raw" },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "b82a48a440msh858ddec1746d0f7p15a646jsn199a4e41eca7",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

export const NewsService = {
  async getNews() {
    return axios.request(options);
  },
};
