import axios from "axios";

const localServer = "http://localhost:8001";
const productionServer = "https://analyzemysentiment.herokuapp.com";
const baseURL =
  process.env.NODE_ENV === "production" ? productionServer : localServer;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const get = (url) => axios.get(`${baseURL}${url}`, headers);

export const put = (url, data) => axios.put(`${baseURL}${url}`, data, headers);

export const post = (url, data) =>
  axios.post(`${baseURL}${url}`, data, headers);
