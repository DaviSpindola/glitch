const INITIAL_STATE = {
  informations: null
};

const sessionUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SESSION_USER_INFORMATIONS":
      return Object.assign({}, state, { ...action.informations });
    case "CLEAR_SESSION_USER_INFORMATIONS":
      return Object.assign({}, state, { ...INITIAL_STATE });
    default:
      return state;
  }
};

export default sessionUserReducer;
