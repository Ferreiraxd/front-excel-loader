import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/v1/',
  timeout: 999999,
});

export default instance;