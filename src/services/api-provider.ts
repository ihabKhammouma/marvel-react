import { AxiosResponse } from "axios";
import moment from "moment";
import CryptoJS from "crypto-js";
import axiosInstance from "./axios-instance";
import { PRIVATE_KEY, PUBLIC_KEY } from "../config/config";
import { Marvel } from "../interfaces/marvel";

const ApiProvider = () => {
  const timeStamp = moment().unix();
  const privateKey: string = PRIVATE_KEY;
  const apiKey: string = PUBLIC_KEY;
  const hash = CryptoJS.MD5(timeStamp + privateKey + apiKey).toString(
    CryptoJS.enc.Hex
  );
  const auth = `apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`;

  const getCharacters = async (
    page: number
  ): Promise<AxiosResponse<Marvel, any>> => {
    const count = 20;
    const currentPage = page || 1;
    const currentOffset = currentPage === 1 ? 0 : count * (page - 1);

    let params = `limit=${count}&offset=${currentOffset}&orderBy=-modified&${auth}`;

    return await axiosInstance.get(`/characters?${params}`);
  };

  return {
    getCharacters,
  };
};

export default ApiProvider;
