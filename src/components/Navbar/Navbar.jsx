import styles from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import NavLinkItem from "./NavLinkItem/NavLinkItem";

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <nav>
        <NavLinkItem to="/profile" name="Profile" />
        <NavLinkItem to="/dialogs" name="Messages" />
        <NavLinkItem to="/news" name="News" />
        <NavLinkItem to="/music" name="Music" />
        <NavLinkItem to="/settings" name="Settings" />
      </nav>
      <Friends state={props.state} />
    </div>
  );
};

export default Navbar;
