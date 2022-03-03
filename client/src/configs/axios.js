import axios from "axios";

const api = axios.create({
  baseURL: "https://samurai-society.herokuapp.com/",
  headers: {accessToken: `${localStorage.getItem("accessToken")}`},
});

export default api;