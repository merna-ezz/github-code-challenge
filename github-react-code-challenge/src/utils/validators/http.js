import axios from "axios";
export const GetRequest = (url) => {
  return axios.get(url);
};
