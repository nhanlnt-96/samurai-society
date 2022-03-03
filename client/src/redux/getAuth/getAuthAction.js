import {GET_AUTH_FAIL, GET_AUTH_START, GET_AUTH_SUCCESS} from "./actionTypes";
import axios from "axios";
import api from "../../configs/axios";

export const getAuthStart = () => {
  return {
    type: GET_AUTH_START
  };
};

export const getAuthSuccess = (userData) => {
  return {
    type: GET_AUTH_SUCCESS,
    payload: userData
  };
};

export const getAuthFail = (data) => {
  return {
    type: GET_AUTH_FAIL,
    payload: data
  };
};

export const getUserAuth = (accessToken) => {
  return async (dispatch) => {
    dispatch(getAuthStart());
    if (accessToken) {
      await axios.get("https://samurai-society.herokuapp.com/user/auth", {
        headers: {accessToken}
      }).then((res) => {
        dispatch(getAuthSuccess(res.data.data));
      }).catch((error) => {
        dispatch(getAuthFail(error));
      });
    } else {
      await api.get("user/auth").then((res) => {
        dispatch(getAuthSuccess(res.data.data));
      }).catch((error) => {
        dispatch(getAuthFail(error));
      });
    }
  };
};