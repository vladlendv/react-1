import styles from "./NavLinkItem.module.css";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ to, name }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={(item) => (item.isActive ? styles.active : styles.item)}
      >
        {name}
      </NavLink>
    </div>
  );
};
export default NavLinkItem;
