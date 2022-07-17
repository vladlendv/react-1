const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: null,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, followed: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, followed: false } : user
        ),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}
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
export const setCurrentPageActionCreator = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
export const setTotalUsersCountActionCreator = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});

export default usersReducer;
