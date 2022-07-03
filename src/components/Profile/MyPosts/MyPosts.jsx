import {
  addCharAtPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postData, newPostText, dispatch, profileInfo }) => {
  const postsElements = postData.map((item) => (
    <Post
      profileImg={profileInfo.profileImg}
      message={item.message}
      like={item.like}
      id={item.id}
      key={item.id}
    />
  ));
  const addPost = () => dispatch(addPostActionCreator());
  const postOnChange = (e) => {
    dispatch(addCharAtPostActionCreator(e.target.value));
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={postOnChange} value={newPostText} />
        </div>
        <button onClick={addPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
