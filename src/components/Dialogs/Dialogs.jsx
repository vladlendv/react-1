import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ messagesPage, sendNewMessage, setMessageText, setDialog }) => {
  let dialogsElement = messagesPage.usersData.map((user) => (
    <DialogItem
      setDialog={setDialog}
      name={user.name}
      profileImg={user.profileImg}
      id={user.id}
      key={user.id}
    />
  ));

  let currentUser = messagesPage.usersData.filter(
    (item) => item.id === messagesPage.activeDialog.id
  );
  let messagesElement = currentUser[0].messages.map((userMessage) => {
    return (
      <Message
        user={currentUser}
        message={userMessage.text}
        type={userMessage.type}
        id={userMessage.id}
        key={userMessage.id}
      />
    );
  });

  let sendMessageText = (e) => {
    setMessageText(e.target.value);
  };
  let sendToNewMessage = () => {
    let id = messagesPage.activeDialog.id;
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
