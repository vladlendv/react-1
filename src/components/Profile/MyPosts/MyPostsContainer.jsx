import {
  addCharAtPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux/es/exports";

// const MyPostsContainer = ({store}) => {
//   let state = store.getState().profilePage
//   const addPost = () => store.dispatch(addPostActionCreator());
//   const postOnChange = (value) => {
//     store.dispatch(addCharAtPostActionCreator(value));
//   };

//   return (
//     <MyPosts
//       postOnChange={postOnChange}
//       addPost={addPost}
//       postData={state.postData}
//       newPostText={state.newPostText}
//       profileImg={state.profileInfo.profileImg}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    postOnChange: (value) => {
      dispatch(addCharAtPostActionCreator(value));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
