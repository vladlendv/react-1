import styles from "./Post.module.css";

const Post = ({ message, like }) => {
  return (
    <div className={styles.item}>
      <img src="https://mir-avatarok.3dn.ru/_si/0/92302704.jpg" alt="" />
      {message}
      <div>
        <span>{like + " like"}</span>
      </div>
    </div>
  );
};

export default Post;
