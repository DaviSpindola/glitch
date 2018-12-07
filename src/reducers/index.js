import { combineReducers } from "redux";

import sessionReducer from "./session";
import userReducer from "./user";
import feedReducer from "./feed";
import mediaReducer from "./media";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  feedState: feedReducer,
  mediaState: mediaReducer
});

export default rootReducer;
