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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText;
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData[state.postData.length - 1].id + 1,
            message: text,
            like: 0,
          },
        ],
        newPostText: "",
      };
    }
    case ADD_CHAR_AT_POST: {
      return {
        ...state,
        newPostText: action.currentChar,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const addCharAtPost = (text) => ({
  type: ADD_CHAR_AT_POST,
  currentChar: text,
});

export default profileReducer;
