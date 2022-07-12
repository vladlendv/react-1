import {
  addCharAtPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});
const mapDispatchToProps = (dispatch) => ({
  postOnChange: (value) => dispatch(addCharAtPostActionCreator(value)),
  addPost: () => dispatch(addPostActionCreator()),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
