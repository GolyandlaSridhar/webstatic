import {
  CREATE_CHAT,
  UPDATE_CHAT,
  DELETE_CHAT,
  RETRIEVE_CHATS,
  RETRIEVE_USER_CHATS,
} from "../actions/types"

const initialState = []

const chatReducer = (chats = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_CHAT:
      return [...chats, payload]

    case RETRIEVE_CHATS:
      return payload

    case RETRIEVE_USER_CHATS:
      return payload

    case UPDATE_CHAT:
      return chats.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...chats,
            ...payload,
          }
        } else {
          return chats
        }
      })

    case DELETE_CHAT:
      return chats.filter(({ id }) => id !== payload.id)

    default:
      return chats
  }
}

export default chatReducer
