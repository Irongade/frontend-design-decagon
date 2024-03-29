import axios from 'axios'

const API_BASE_URL = 'https://randomuser.me/api/';

export default axios.create({
    baseURL: API_BASE_URL,
    responseType: "json",
})