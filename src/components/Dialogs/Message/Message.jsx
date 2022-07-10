import styles from "./Message.module.css";

const Message = ({ message, user, type }) => {
  return (
    <div className={type === "inner" ? styles.innerBlock : styles.outerBlock}>
      {type === "inner" ? (
        <img
          src={type === "inner" ? user[0].profileImg : ""}
          alt="avatar"
          className={styles.userAvatar}
        ></img>
      ) : (
        ""
      )}

      <div className={styles.message}>
        <div className={styles.userName} >{type === "inner" ? user[0].name : ""}</div>
        {message}
      </div>
    </div>
  );
};

export default Message;
