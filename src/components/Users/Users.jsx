import styles from "./Users.module.css";

const Users = ({ follow, unfollow, users }) => {
  return (
    <div className={styles.usersContainer}>
      {users.map((user) => (
        <div className={styles.usersItem} key={user.id}>
          <div>
            <div>
              <img height={100} width={100} src={user.photoUrl} alt="" />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => unfollow(user.id)}>unfollow</button>
              ) : (
                <button onClick={() => follow(user.id)}>follow</button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
