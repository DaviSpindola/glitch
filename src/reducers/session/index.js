const INITIAL_STATE = {
  authUser: null
};

const SET_AUTH_USER = "SET_AUTH_USER";

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, authUser: action.authUser };
    default:
      return state;
  }
};

export default sessionReducer;
