import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({
  messageText,
  sendNewMessage,
  usersData,
  newMessageText,
  profileInfo,
  store,
  activeDialog
}) => {
  let dialogsElement = usersData.map((user) => (
    <DialogItem
      store={store}
      name={user.name}
      id={user.id}
      key={user.id}
      profileImg={user.profileImg}
    />
  ));

  let currentUser = usersData.filter((item) => item.id === activeDialog.id);
  let messagesElement = currentUser[0].messages.map((userMessage) => {
    return (
      <Message
        user={currentUser}
        message={userMessage.text}
        profileInfo={profileInfo}
        type={userMessage.type}
      />
    );
  });

  let sendMessageText = (e) => {
    messageText(e.target.value);
  };
  let sendToNewMessage = () => {
    sendNewMessage();
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElement}
        <div className={styles.sendMessageBlock}>
          <textarea
            onChange={sendMessageText}
            className={styles.newMessageField}
            value={newMessageText}
          ></textarea>
          <button className={styles.sendButton} onClick={sendToNewMessage}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
