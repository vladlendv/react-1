import styles from "./Friends.module.css";
import User from "./User/User";

const Friends = ({ store }) => {
  return (
    <>
      <h3>Friends</h3>
      <div className={styles.friends}>
        {store.getState().messagesPage.usersData.map(({ profileImg, name, id }) => (
          <User profileImg={profileImg} name={name} key={id} />
        ))}
      </div>
    </>
  );
};

export default Friends;
