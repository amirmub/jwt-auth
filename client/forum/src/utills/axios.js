import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "http://localhost:5555/api"
})

export default axiosInstance;