import axios, { AxiosInstance } from "axios";
import { API_ENDPOINT } from "../config/config";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
