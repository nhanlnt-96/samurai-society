import {FINISH_UPDATE} from "./actionTypes";
import {uploadedImgsToDb} from "../uploadMultiImg/uploadMultiActions";

export const finishUpdate = (status) => {
  return {
    type: FINISH_UPDATE,
    payload: status
  };
};

export const finishUploadImg = () => {
  return (dispatch) => {
    dispatch(uploadedImgsToDb());
    dispatch(finishUpdate(true));
  };
};