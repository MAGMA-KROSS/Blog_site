import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/", // Backend URL
  withCredentials: true, // Send cookies with requests
});

export default API;

