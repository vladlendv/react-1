import { NavLink } from "react-router-dom";
import state from "../../redux/state";
import Friends from "./Friends/Friends";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <div className={styles.nav}>
      <nav>
        <div>
          <NavLink
            to="/profile"
            className={(item) => (item.isActive ? styles.active : styles.item)}
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs"
            className={(item) => (item.isActive ? styles.active : styles.item)}
          >
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/news"
            className={(item) => (item.isActive ? styles.active : styles.item)}
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/music"
            className={(item) => (item.isActive ? styles.active : styles.item)}
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/settings"
            className={(item) => (item.isActive ? styles.active : styles.item)}
          >
            Settings
          </NavLink>
        </div>
      </nav>
      <Friends state={props.state} />
    </div>
  );
}
