import { RETRIEVE_USERS } from "./types"

import UserDataService from "../services/user.service"

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.getAllUsers()
    //console.log("Users Actions : " + JSON.stringify(res.data))

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}
