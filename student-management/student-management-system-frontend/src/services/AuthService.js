import axios from "axios";

const AUTH_API = "http://localhost:8080/auth";

export const login = (loginData) =>
    axios.post(`${AUTH_API}/login`, loginData);