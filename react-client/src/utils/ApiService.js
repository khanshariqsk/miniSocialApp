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