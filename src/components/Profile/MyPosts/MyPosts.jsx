import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
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
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}
