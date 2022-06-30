import React from "react";
import {
  addCharAtPostActionCreator,
  addPostActionCreator,
} from "../../../redux/state";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postData, newPostText, dispatch }) => {
  const postsElements = postData.map((item) => (
    <Post message={item.message} like={item.like} id={item.id} key={item.id} />
  ));
  let newPostElement = React.createRef();
  const addPost = () => dispatch(addPostActionCreator());
  const postOnChange = () => {
    let text = newPostElement.current.value;
    dispatch(addCharAtPostActionCreator(text));
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={postOnChange}
            ref={newPostElement}
            value={newPostText}
          />
        </div>
        <button onClick={addPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
