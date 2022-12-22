import axios from "axios";

const request = axios.create({
  baseURL: "http://101.201.143.127:9000",
});

export default request;
