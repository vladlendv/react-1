import styles from "./Post.module.css";

const Post = ({ message, like, profileImg}) => {
  return (
    <div className={styles.item}>
      <img src={profileImg} alt="ava" />
      {message}
      <div>
        <span>{like + " like"}</span>
      </div>
    </div>
  );
};

export default Post;
