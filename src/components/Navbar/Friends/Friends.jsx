import styles from "./Friends.module.css";
import User from "./User/User";

const Friends = ({ state }) => {
  return (
    <>
      <h3>Friends</h3>
      <div className={styles.friends}>
        {state.usersData.map(({ profileImg, name, id }) => (
          <User profileImg={profileImg} name={name} key={id} />
        ))}
      </div>
    </>
  );
};

export default Friends;
