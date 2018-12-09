import { combineReducers } from "redux";

import sessionReducer from "./session";
import sessionUserReducer from "./session/user";

import userReducer from "./user";
import feedReducer from "./feed";
import mediaReducer from "./media";
import notificationReducer from "./notification";
import settingsReducer from "./settings";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  sessionUserState: sessionUserReducer,
  userState: userReducer,
  feedState: feedReducer,
  mediaState: mediaReducer,
  notificationState: notificationReducer,
  settingsState: settingsReducer
});

export default rootReducer;
