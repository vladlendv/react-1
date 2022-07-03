import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  newMessageTextActionCreator,
  sendNewMessageActionCreator,
} from "../../redux/messagesReducer";

const Dialogs = ({ dispatch, state }) => {
  let { usersData, activeDialog, newMessageText } = state.messagesPage;
  let dialogsElement = usersData.map((user) => (
    <DialogItem
      dispatch={dispatch}
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
        profileInfo={state.profilePage.profileInfo}
        type={userMessage.type}
      />
    );
  });

  let messageText = (e) => {
    dispatch(newMessageTextActionCreator(e.target.value));
  };
  let sendNewMessage = () => {
    dispatch(
      sendNewMessageActionCreator({
        id: activeDialog.id,
        key: Date.now(),
      })
    );
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElement}
        <div className={styles.sendMessageBlock}>
          <textarea
            onChange={messageText}
            className={styles.newMessageField}
            value={newMessageText}
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
