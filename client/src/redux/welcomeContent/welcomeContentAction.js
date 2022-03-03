import {GET_WELCOME_CONTENT_FAIL, GET_WELCOME_CONTENT_START, GET_WELCOME_CONTENT_SUCCESS} from "./actionTypes";
import api from "../../configs/axios";


export const getWelcomeContentStart = () => {
  return {
    type: GET_WELCOME_CONTENT_START
  };
};

export const getWelcomeContentSuccess = (welcomeData) => {
  return {
    type: GET_WELCOME_CONTENT_SUCCESS,
    payload: welcomeData
  };
};

export const getWelcomeContentFail = (error) => {
  return {
    type: GET_WELCOME_CONTENT_FAIL,
    payload: error
  };
};

export const getWelcomeContent = () => {
  return async (dispatch) => {
    dispatch(getWelcomeContentStart());
    await api.get("welcome").then((res) => {
      dispatch(getWelcomeContentSuccess(res.data.data[0]));
    }).catch((error) => {
      dispatch(getWelcomeContentFail(error.response.data.error));
    });
  };
};