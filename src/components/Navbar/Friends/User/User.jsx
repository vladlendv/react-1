import styles from "./User.module.css";

const User = ({ profileImg, name, id }) => {
  return (
    <div>
      <img className={styles.userImg} src={profileImg} alt="" key={id} />
      <div>{name}</div>
    </div>
  );
};

export default User;
