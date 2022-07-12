import styles from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import NavLinkItem from "./NavLinkItem/NavLinkItem";

const Navbar = ({store}) => {
  return (
    <div className={styles.nav}>
      <nav>
        <NavLinkItem to="/profile" name="Profile" />
        <NavLinkItem to="/dialogs" name="Messages" />
        <NavLinkItem to="/users" name="Users" />
        <NavLinkItem to="/news" name="News" />
        <NavLinkItem to="/music" name="Music" />
        <NavLinkItem to="/settings" name="Settings" />
      </nav>
      <Friends store={store} />
    </div>
  );
};

export default Navbar;
