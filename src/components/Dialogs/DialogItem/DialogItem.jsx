import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  const setDialog = () => {
    let user = {
      id: props.id,
      name: props.name,
    };
    let bindSetActiveDialog = props.store.setActiveDialog.bind(props.store);
    bindSetActiveDialog(user);
  };

  return (
    <div className={styles.dialog}>
      <div>
        <img
          src={props.profileImg}
          alt="avatar"
          className={styles.userAvatar}
        ></img>
      </div>
      <NavLink to={`/dialogs/${props.id}`} onClick={setDialog}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
