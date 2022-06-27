import styles from "./User.module.css";

const User = (props) => {
  return (
    <div>
      <img className={styles.userImg} src={props.profileImg} alt="" />
      <div>{props.name}</div>
    </div>
  );
}

export default User;