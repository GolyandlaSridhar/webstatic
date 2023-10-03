import http from "../http-common"
import authHeader from "./auth-header"

const getUserMessages = (id) => {
  return http.get(`/messages/${id}`, {
    headers: authHeader(),
  })
}

const MessageService = {
  getUserMessages,
}

export default MessageService
