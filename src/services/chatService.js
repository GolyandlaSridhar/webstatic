import http from "../http-common"
import authHeader from "./auth-header"

const getAllMessages = () => {
  return http.get("/messages", { headers: authHeader() })
}

const getConversationUsersList = (id) => {
  return http.get("/conversations/", {
    headers: authHeader(),
  })
}

const ChatService = {
  getAllMessages,
  getConversationUsersList,
}

export default ChatService
