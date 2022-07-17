import MyPosts from "./MyPosts";
import { addCharAtPost, addPost } from "../../../redux/profileReducer";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const MyPostsContainer = connect(mapStateToProps, { addCharAtPost, addPost })(
  MyPosts
);

export default MyPostsContainer;
