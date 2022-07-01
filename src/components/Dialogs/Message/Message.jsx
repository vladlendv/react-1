import styles from "./Message.module.css";

const Message = ({ message, user, type, profileInfo}) => {
  return (
    <div className={styles.messageBlock}>
      <img
        src={type === 'inner' ? user[0].profileImg : profileInfo.profileImg}
        alt="avatar"
        className={styles.userAvatar}
      ></img>
      {type === 'inner' ? user[0].name : ''}
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Message;
