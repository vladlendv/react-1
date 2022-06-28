import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.postData.map((item) => {
    return (
      <Post
        message={item.message}
        like={item.like}
        id={item.id}
        key={item.id}
      />
    );
  });
  let newPostElement = React.createRef();
  const addPost = () => {
    props.store._addPost();
  };
  const postOnChange = () => {
    let text = newPostElement.current.value;
    console.log(text);
    props.store._addCharAtPost(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={postOnChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;