import styles from "./Friends.module.css";
import User from "./User/User";

const Friends = ({state}) => {
  return (
    <div>
      <h3>Friends</h3>
      <div className={styles.friends}>
        {state.usersData.map(friend => {
          return <User profileImg={friend.profileImg} name={friend.name} key={friend.id} />
        })}
      </div>
    </div>
  );
}

export default Friends;