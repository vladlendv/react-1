import axios from "axios";
import React from "react";
import styles from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div className={styles.usersContainer}>
        {this.props.users.map((user) => (
          <div className={styles.usersItem} key={user.id}>
            <div>
              <div>
                <img
                  className={styles.userImg}
                  height={100}
                  width={100}
                  src={
                    user.photos.small ||
                    "https://img.freepik.com/free-vector/anonymous-man-with-hidden-face-at-laptop-hacker-dark-abstract-body-covered-with-hood-online-person-not-identified-by-name-unknown-faceless-user-incognito-with-evil-intentions-vector-illustration_89224-6639.jpg"
                  }
                  alt=""
                />
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollow(user.id)}>
                    unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>
                    follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
