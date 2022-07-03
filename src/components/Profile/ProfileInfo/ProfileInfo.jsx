import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({ profileInfo }) => {
  return (
    <div>
      <div>
        <div className={styles.profileName}>{profileInfo.getFullName()}</div>
        <img
          height="300px;"
          width="100%"
          src="https://funart.pro/uploads/posts/2021-03/1617081181_10-p-oboi-panorama-lesa-14.jpg"
          alt="content-avatar"
        />
      </div>
      <div>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
