import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
  let usersData = [
    { id: 1, name: "Katya" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Dimon" },
  ];

  let messagesData = [
    { id: 1, message: "Where am I?" },
    { id: 2, message: "I don't know" },
    { id: 3, message: ":(" },
    { id: 4, message: "Hello there" },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {usersData.map((item) => {
          return <DialogItem name={item.name} id={item.id} key={item.id} />;
        })}
      </div>
      <div className={styles.messages}>
        {messagesData.map((item) => {
          return <Message message={item.message} id={item.id} key={item.id} />;
        })}
      </div>
    </div>
  );
}
