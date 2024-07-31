import axios from "axios";

const api = axios.create({
  // baseURL: "http://216.250.13.199:8000/api",
  baseURL: "/api",
  withCredentials: true,
});
export { api };
