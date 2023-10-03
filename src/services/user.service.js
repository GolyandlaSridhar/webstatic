import axios from "axios"
import authHeader from "./auth-header"
import http from "../http-common"

const API_URL = "http://localhost:4000/api/test/"

const getPublicContent = () => {
  return axios.get(API_URL + "all")
}

const getAllUsers = () => {
  return http.get("/getAllUsers", { headers: authHeader() })
}

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() })
}

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() })
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
  getAllUsers,
}
