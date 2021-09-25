import axios from "axios";

const BASE_URL_DEV = process.env.REACT_APP_DEV_URL

export const getUserByIdApi = (userId) => {
    return axios.get(
        `${BASE_URL_DEV}/users/${userId}`
    );
}

export const getUserTimelineApi = (userTimelineOrFriendTimeline) => {
    return axios.get(
        `${BASE_URL_DEV}/posts/timeline/${userTimelineOrFriendTimeline}`
    );
}

export const getUserFriendsApi = (userFriends) => {
    return Promise.all(userFriends.map(friendId=>getUserByIdApi(friendId)))
}

export const getUserLoginCredentialApi = async (userInputData,dispatch) => {
    try {
      dispatch({ type: "LOGIN_START" });
      const loggedInUserData = await axios.post(
        `${BASE_URL_DEV}/auth/login`,userInputData
    );
      dispatch({ type: "LOGIN_RESPONSE", payload: loggedInUserData.data });
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error });
    }
  };