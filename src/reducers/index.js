import { combineReducers } from "redux";

import sessionReducer from "./session";
import userReducer from "./user";
import feedReducer from "./feed";
import mediaReducer from "./media";
import notificationReducer from "./notification";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  feedState: feedReducer,
  mediaState: mediaReducer,
  notificationState: notificationReducer
});

export default rootReducer;
