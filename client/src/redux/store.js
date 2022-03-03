import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import authReducer from "./auth/authReducer";
import getAuthReducer from "./getAuth/getAuthReducer";
import bannerContentReducer from "./bannerContent/bannerContentReducer";
import welcomeContentReducer from "./welcomeContent/welcomeContentReducer";
import aboutContentReducer from "./aboutContent/aboutContentReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
  auth: authReducer,
  getAuth: getAuthReducer,
  bannerContent: bannerContentReducer,
  welcomeContent: welcomeContentReducer,
  aboutContent: aboutContentReducer,
  // finishUpdate: finishUpdateReducer,
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
