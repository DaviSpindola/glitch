const INITIAL_STATE = {
  media: []
};

const mediaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RECEIVE_MEDIA":
      return Object.assign({}, state, {
        media: [...state.media, action.media]
      });
    default:
      return state;
  }
};

export default mediaReducer;
