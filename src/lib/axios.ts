import Axios from "axios";
import { apiConfig } from "@/config/apiConfig";

const axios = Axios.create(apiConfig);

axios.interceptors.request.use(
  (config) => {
    // const catHeader = localStorage.getItem("X-custom-cat-header");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("API Error", error);
    return Promise.reject(error.message);
  },
);

export default axios;
