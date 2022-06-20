import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

export default function DialogItem(props) {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}
