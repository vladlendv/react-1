import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendNewMessageActionCreator } from "../../redux/state";

const Dialogs = ({ dispatch, state }) => {
  let { usersData, messagesData, activeDialog } = state.messagesPage;
  let dialogsElement = usersData.map((user) => (
    <DialogItem
      dispatch={dispatch}
      name={user.name}
      id={user.id}
      key={user.id}
      profileImg={user.profileImg}
    />
  ));

  let messagesElement = messagesData[activeDialog.id].messages.map(
    (userMessage) => (
      <Message
        user={usersData.filter((user) => user.id === activeDialog.id)}
        message={userMessage}
        key={userMessage}
      />
    )
  );

  let newMessageElement = React.createRef();
  let sendNewMessage = () => {
    dispatch(
      sendNewMessageActionCreator(
        activeDialog.id,
        newMessageElement.current.value
      )
    );
    newMessageElement.current.value = "";
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElement}
        <div className={styles.sendMessageBlock}>
          <textarea
            className={styles.newMessageField}
            ref={newMessageElement}
          ></textarea>
          <button className={styles.sendButton} onClick={sendNewMessage}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
