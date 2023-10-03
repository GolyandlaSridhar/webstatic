import { GET_MESSAGE, CLEAR_MESSAGE } from "./types"

import UserMessageDataService from "../services/MessageService"

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
})

export const getUserMessages = (id) => async (dispatch) => {
  try {
    const res = await UserMessageDataService.getUserMessages(id)
    //console.log("Message in Actions " + JSON.stringify(res.data))

    dispatch({
      type: GET_MESSAGE,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}
