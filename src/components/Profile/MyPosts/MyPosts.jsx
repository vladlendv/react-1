import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add new post</button>
      </div>
      <div className={styles.posts}>
        {props.postData.map((item) => {
          return (
            <Post
              message={item.message}
              like={item.like}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
