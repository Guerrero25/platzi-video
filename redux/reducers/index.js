import { combineReducers } from "redux";
import navigationReducer from "./navigation";
import videos from "./videos";

const rootReducer = combineReducers({
  videos,
  navigation: navigationReducer
});

export default rootReducer;
