const ADD_POST = "ADD-POST";
const ADD_CHAR_AT_POST = "ADD-CHAR-AT-POST";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "Hello everyone!", like: 39 },
    { id: 3, message: "JavaScript or...", like: 120325 },
  ],
  newPostText: "",
  profileInfo: {
    firstName: "Vladlen",
    lastName: "Dvornikov",
    profileImg:
      "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg",
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
  },
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 4,
        message: state.newPostText,
        like: 0,
      };
      state.postData.unshift(newPost);
      state.newPostText = "";
      break;
    case ADD_CHAR_AT_POST:
      state.newPostText = action.currentChar;
      break;
    default:
      break;
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addCharAtPostActionCreator = (text) => ({
  type: ADD_CHAR_AT_POST,
  currentChar: text,
});

export default profileReducer;
