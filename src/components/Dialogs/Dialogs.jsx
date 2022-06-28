import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let { usersData, messagesData, activeDialog } = props.state;

  let dialogsElement = usersData.map((user) => {
    return (
      <DialogItem
        store={props.store}
        name={user.name}
        id={user.id}
        key={user.id}
        profileImg={user.profileImg}
      />
    );
  });

  let messagesElement = messagesData[activeDialog.id].messages.map(
    (userMessage) => {
      return (
        <Message message={userMessage} key={userMessage} />
      );
    }
  );

  let newMessageElement = React.createRef();

  let sendNewMessage = () => {
    let bindSendMessage = props.store.sendMessage.bind(props.store);
    bindSendMessage(activeDialog.id, newMessageElement.current.value);
    newMessageElement.current.value = '';
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElement}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendNewMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Dialogs;
