import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "http://localhost:5500/api"
})

export default axiosInstance;