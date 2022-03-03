import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import authReducer from "./auth/authReducer";
import getAuthReducer from "./getAuth/getAuthReducer";
import bannerContentReducer from "./bannerContent/bannerContentReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
  auth: authReducer,
  getAuth: getAuthReducer,
  bannerContent: bannerContentReducer,
  // finishUpdate: finishUpdateReducer,
  // aboutContent: aboutContentReducer,
  // roadmapContent: roadmapContentReducer,
  // faqContent: faqContentReducer,
  // teamContent: teamContentReducer,
  // collectionsContent: collectionsContentReducer,
  // uploadedImgsData: uploadMultiImgReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
