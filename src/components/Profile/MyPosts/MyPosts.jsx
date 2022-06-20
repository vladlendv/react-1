import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  let postData = [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "Hello everyone!", like: 15 },
    { id: 3, message: "JavaScript or...", like: 120 },
  ];

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
        {postData.map((item) => {
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
