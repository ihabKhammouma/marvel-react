import axios, { AxiosInstance } from "axios";
import { BACKEND_API, BACKEND_Token } from "../config/config";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACKEND_API,
  headers: {
    "Content-Type": "application/json",
    "x-token": BACKEND_Token,
  },
});

export default axiosInstance;
