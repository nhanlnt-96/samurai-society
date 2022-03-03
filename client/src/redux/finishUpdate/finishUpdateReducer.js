import {FINISH_UPDATE} from "./actionTypes";

const initialState = {
  isFinishUpdate: false
};

const finishUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_UPDATE:
      return {
        isFinishUpdate: action.payload
      };
    default:
      return state;
  }
};

export default finishUpdateReducer;