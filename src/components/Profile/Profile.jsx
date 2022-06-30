import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({ profilePage, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={profilePage.postData}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
