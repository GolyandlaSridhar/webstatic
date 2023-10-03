import { combineReducers } from "redux"
import auth from "./auth"
import message from "./message"
import tutorials from "./tutorials"
import chats from "./chats"
import users from "./users"

export default combineReducers({
  auth,
  message,
  tutorials,
  chats,
  users,
})
