import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ profilePage, addPost, postOnChange }) => {
  const postsElements = profilePage.postData.map((item) => (
    <Post
      profileImg={profilePage.profileInfo.profileImg}
      message={item.message}
      like={item.like}
      key={item.id}
    />
  ));
  const addNewPost = () => addPost();
  const newPostOnChange = (e) => {
    let value = e.target.value;
    postOnChange(value);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={newPostOnChange}
            value={profilePage.newPostText}
          />
        </div>
        <button onClick={addNewPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postsElements.reverse()}</div>
    </div>
  );
};

export default MyPosts;
