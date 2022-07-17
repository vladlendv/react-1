import Preloader from "../Preloader/Preloader";
import styles from "./Users.module.css";

const Users = ({
  totalUsersCount,
  pageSize,
  pageChanged,
  currentPage,
  users,
  unfollow,
  follow,
  itemIsLoading,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let currentPageStart = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageEnd = currentPage + 5;
  let slicedPage = pages.slice(currentPageStart, currentPageEnd);

  return (
    <div className={styles.usersContainer}>
      {itemIsLoading ? <Preloader /> : <></>}
      <div>
        {slicedPage.map((page) => (
          <span
            onClick={() => {
              pageChanged(page);
            }}
            className={
              currentPage === page ? styles.selectedPage : styles.paginationItem
            }
            key={page}
          >
            {page}
          </span>
        ))}
      </div>
      {users.map((user) => (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
