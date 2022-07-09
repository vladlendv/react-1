import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.postData.map((item) => (
    <Post
      profileImg={props.profileImg}
      message={item.message}
      like={item.like}
      id={item.id}
      key={item.id}
    />
  ));
  const addNewPost = () => props.addPost();
  const newPostOnChange = (e) => {
    let value = e.target.value;
    props.postOnChange(value)
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={newPostOnChange} value={props.newPostText} />
        </div>
        <button onClick={addNewPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
