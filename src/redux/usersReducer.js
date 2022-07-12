const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: "Dmitry",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwhLS_0Z2QoCmSdPPI9PzDrMEDSUG7Ce74A&usqp=CAU",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    },
    {
      id: 2,
      followed: false,
      name: "Malena",
      photoUrl: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",
      location: {
        city: "Bobruisk",
        country: "Belarus",
      },
    },
    {
      id: 3,
      followed: true,
      name: "Semen",
      photoUrl:
        "https://i.pinimg.com/550x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg",
      location: {
        city: "Perm",
        country: "Russia",
      },
    },
  ],
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
      return { ...state, users: [...state.users, action.users] };
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
