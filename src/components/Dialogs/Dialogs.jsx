import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({
  messagesPage,
  sendNewMessage,
  messageText,
  setDialog,
}) => {
  let dialogsElement = messagesPage.usersData.map((user) => (
    <DialogItem
      setDialog={setDialog}
      name={user.name}
      id={user.id}
      key={user.id}
      profileImg={user.profileImg}
    />
  ));

  let currentUser = messagesPage.usersData.filter((item) => item.id === messagesPage.activeDialog.id);
  let messagesElement = currentUser[0].messages.map((userMessage) => {
    return (
      <Message
        user={currentUser}
        message={userMessage.text}
        type={userMessage.type}
      />
    );
  });

  let sendMessageText = (e) => {
    messageText(e.target.value);
  };
  let sendToNewMessage = () => {
    let id = messagesPage.activeDialog.id
    sendNewMessage(id);
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
            value={messagesPage.newMessageText}
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
