const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_INFORMATIONS":
      return Object.assign({}, state, { ...action.user });
    case "CLEAR_USER_INFORMATIONS":
      return Object.assign({}, state, { ...INITIAL_STATE });
    default:
      return state;
  }
};

export default userReducer;
