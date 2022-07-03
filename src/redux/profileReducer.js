const ADD_POST = "ADD-POST";
const ADD_CHAR_AT_POST = "ADD-CHAR-AT-POST";

const profileReducer = (state, action) => {
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
