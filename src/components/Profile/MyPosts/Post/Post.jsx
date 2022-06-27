import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://mir-avatarok.3dn.ru/_si/0/92302704.jpg" alt="" />
      {props.message}
      <div>
        <span>{props.like + " like"}</span>
      </div>
    </div>
  );
}

export default Post;
