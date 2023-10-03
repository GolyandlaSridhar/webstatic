import { GET_MESSAGE, CLEAR_MESSAGE } from "../actions/types"

const initialState = []

const messageReducer = (messages = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_MESSAGE:
      return payload

    case CLEAR_MESSAGE:
      return []

    default:
      return messages
  }
}

export default messageReducer
