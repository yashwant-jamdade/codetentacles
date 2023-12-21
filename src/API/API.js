import axios from "axios";
import endpoints from "./endpoints";

const token = window?.sessionStorage?.getItem("token");

const API = axios.create({
  baseURL: endpoints.ServerBaseURL,
  method: "GET",
  headers: {
    token: `${token}`,
  },
});

API.interceptors.request.use(
  (config) => {
    const token = window?.sessionStorage?.getItem("token");

    if (token) {
      config.headers["token"] = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
