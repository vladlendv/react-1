import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={styles.dialog}>
      <div>
        <img
          src={props.profileImg}
          alt="avatar"
          className={styles.userAvatar}
        ></img>
      </div>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
