const INITIAL_STATE = {};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RECEIVE_SETTINGS":
      return { ...state, ...action.settings };
    default:
      return state;
  }
};

export default settingsReducer;
