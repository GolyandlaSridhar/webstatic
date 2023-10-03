import {
  CREATE_CHAT,
  DELETE_CHAT,
  RETRIEVE_USER_CHATS,
  RETRIEVE_USERS,
} from "./types"

import ChatDataService from "../services/chatService"

export const createChat =
  (conversationId, senderId, message, receiverId) => async (dispatch) => {
    try {
      const res = await ChatDataService.create({
        conversationId,
        senderId,
        message,
        receiverId,
      })

      dispatch({
        type: CREATE_CHAT,
        payload: res.data,
      })

      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }

export const getConversationUsersList = () => async (dispatch) => {
  try {
    const res = await ChatDataService.getConversationUsersList()

    dispatch({
      type: RETRIEVE_USER_CHATS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteChat = (id) => async (dispatch) => {
  try {
    await ChatDataService.remove(id)

    dispatch({
      type: DELETE_CHAT,
      payload: { id },
    })
  } catch (err) {
    console.log(err)
  }
}

export const getUserChats = () => async (dispatch) => {
  try {
    const res = await ChatDataService.getUserChats()
    dispatch({
      type: RETRIEVE_USER_CHATS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await ChatDataService.getAllUsers()
    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}
