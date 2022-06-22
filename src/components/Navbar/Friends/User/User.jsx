import styles from "./User.module.css";

export default function User(props) {
  return (
    <div>
      <img className={styles.userImg} src={props.profileImg} alt="" />
      <div>{props.name}</div>
    </div>
  );
}
