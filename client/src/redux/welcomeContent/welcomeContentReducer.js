import {
  GET_WELCOME_CONTENT_FAIL,
  GET_WELCOME_CONTENT_START,
  GET_WELCOME_CONTENT_SUCCESS
} from "./actionTypes";

const initialState = {
  isLoading: false,
  welcomeData: [],
  error: []
};

const welcomeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WELCOME_CONTENT_START:
      return {
        ...state,
        isLoading: true,
        error: []
      };
    case GET_WELCOME_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        welcomeData: action.payload
      };
    case GET_WELCOME_CONTENT_FAIL:
      return {
        ...state,
        isLoading: false,
        welcomeData: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default welcomeContentReducer;