import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = ({ setDialog, name, id, profileImg }) => {
  const setCurrentDialog = () => {
    let user = {
      id,
    };
    setDialog(user);
  };

  return (
    <div className={styles.dialog}>
      <NavLink
        className={(user) => (user.isActive ? styles.active : styles.item)}
        to={`/dialogs/${id}`}
        onClick={setCurrentDialog}
      >
        <img src={profileImg} alt="avatar" className={styles.userAvatar}></img>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
