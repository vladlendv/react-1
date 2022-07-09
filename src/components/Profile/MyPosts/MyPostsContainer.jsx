import {
  addCharAtPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({store}) => {
  let state = store.getState()
  const addPost = () => store.dispatch(addPostActionCreator());
  const postOnChange = (value) => {
    store.dispatch(addCharAtPostActionCreator(value));
  };

  return (
    <MyPosts
      postOnChange={postOnChange}
      addPost={addPost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
      profileImg={state.profilePage.profileInfo.profileImg}
    />
  );
};

export default MyPostsContainer;
