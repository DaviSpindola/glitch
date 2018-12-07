const INITIAL_STATE = {
  message: "",
  open: false
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEND_NOTIFICATION":
      return Object.assign({}, state, {
        message: action.message,
        open: true
      });
    case "CLOSE_NOTIFICATION":
      return Object.assign({}, state, {
        message: INITIAL_STATE.message,
        open: INITIAL_STATE.open
      });
    default:
      return state;
  }
};

export default notificationReducer;
