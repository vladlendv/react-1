import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' like='15'/>
        <Post message='Hello everyone!' like='20'/>
      </div>
    </div>
  );
}
