import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
  let {usersData, messagesData} = props;
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
