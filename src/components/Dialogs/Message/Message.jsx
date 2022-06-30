import styles from "./Message.module.css";

const Message = ({ message, user }) => {
  return (
    <div className={styles.messageBlock}>
      <img
        src={user[0].profileImg}
        alt="avatar"
        className={styles.userAvatar}
      ></img>
      {user[0].name}
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Message;
