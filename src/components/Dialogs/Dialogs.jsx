import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let { usersData, messagesData } = props.state;
  let dialogsElement = usersData.map((d) => {
    return (
      <DialogItem
        name={d.name}
        id={d.id}
        key={d.id}
        profileImg={d.profileImg}
      />
    );
  });
  let messagesElement = messagesData.map((m) => {
    return <Message message={m.message} id={m.id} key={m.id} />;
  });
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    alert(newMessageElement.current.value);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElement}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default Dialogs;