import styles from "./Friends.module.css";
import User from "./User/User";

export default function Friends(props) {
  return (
    <div>
      <h3>Friends</h3>
      <div className={styles.friends}>
        {props.state.usersData.map(item => {
          return <User profileImg={item.profileImg} name={item.name} />
        })}
      </div>
    </div>
  );
}
