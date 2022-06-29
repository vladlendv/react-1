import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({ profilePage, store }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={profilePage.postData}
        newPostText={profilePage.newPostText}
        store={store}
      />
    </div>
  );
};

export default Profile;
