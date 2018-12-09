const INITIAL_STATE = {
  feed: null
};

const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RECEIVE_POST":
      return Object.assign({}, state, {
        feed: action.feed
      });
    case "ADD_POST":
      return Object.assign({}, state, {
        feed: [...state.feed, action.post]
      });
    default:
      return state;
  }
};

export default feedReducer;
