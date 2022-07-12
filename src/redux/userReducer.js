const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: "Dmitry",
      status: "find friends",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    },
    {
      id: 2,
      followed: false,
      name: "Malena",
      status: ":(",
      location: {
        city: "Bobruisk",
        country: "Belorus",
      },
    },
    {
      id: 3,
      followed: true,
      name: "Semen",
      status: "you know nothing, Jon Snow.",
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
      };
    case "UNFOLLOW":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const followActionCreator = () => ({ type: FOLLOW, userId });
export const unfollowActionCreator = () => ({ type: UNFOLLOW, userId });

export default usersReducer;
