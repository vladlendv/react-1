const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, followed: true } : user
        ),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, followed: false } : user
        ),
      };
    case "SET_USERS":
      return { ...state, users: [...action.users] };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, id: userId });
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  id: userId,
});
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
