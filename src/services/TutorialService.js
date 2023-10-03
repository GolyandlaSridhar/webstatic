import http from "../http-common"
import authHeader from "./auth-header"

const getAll = () => {
  return http.get("/tutorials", { headers: authHeader() })
}

const getUserTutorials = (id) => {
  return http.get("/tutorials/myTutorials/", { headers: authHeader() })
}

const get = (id) => {
  return http.get(`/tutorials/${id}`, { headers: authHeader() })
}

const create = (data) => {
  return http.post("/tutorials", data, { headers: authHeader() })
}

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data, { headers: authHeader() })
}

const remove = (id) => {
  return http.delete(`/tutorials/${id}`, { headers: authHeader() })
}

const removeAll = () => {
  return http.delete(`/tutorials`, { headers: authHeader() })
}

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`, { headers: authHeader() })
}

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  getUserTutorials,
}

export default TutorialService
