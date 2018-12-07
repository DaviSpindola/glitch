const INITIAL_STATE = {
  feed: []
};

const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RECEIVE_POST":
      return Object.assign({}, state, {
        feed: [...state.feed, action.post]
      });
    default:
      return state;
  }
};

export default feedReducer;
