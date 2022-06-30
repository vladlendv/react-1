import { NavLink } from "react-router-dom";
import { setDialogActionCreator } from "../../../redux/state";
import styles from "./DialogItem.module.css";

const DialogItem = ({ dispatch, name, id, profileImg }) => {
  const setDialog = () => {
    let user = {
      id,
      name,
    };
    dispatch(setDialogActionCreator(user));
  };

  return (
    <div className={styles.dialog}>
      <NavLink
        className={(user) => (user.isActive ? styles.active : styles.item)}
        to={`/dialogs/${id}`}
        onClick={setDialog}
      >
        <img src={profileImg} alt="avatar" className={styles.userAvatar}></img>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
