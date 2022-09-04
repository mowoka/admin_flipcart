import axios from "axios";
import { API } from "../config";


const token = window.localStorage.getItem('token');


const axiosInstance = axios.create({
    baseURL: API,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})


export default axiosInstance;