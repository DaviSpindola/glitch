const INITIAL_STATE = {
  profilePicture:
    "https://pbs.twimg.com/profile_images/1067918897008033793/QPA_el_p_400x400.jpg"
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return { ...state, username: action.username };
    case "SET_PROFILE_PICTURE":
      return { ...state, profilePicture: action.profilePicture };
    case "SET_PROFILE_COVER_PICTURE":
      return { ...state, profileCoverPicture: action.profileCoverPicture };
    case "SET_CURRENT_PROFILE":
      return { ...state, ...action.currentProfile };
    default:
      return state;
  }
};

export default userReducer;
