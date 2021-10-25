import axios from "axios";

const request = axios.create({
    baseURL:'http://39.107.67.145:9000'
})

export default request;