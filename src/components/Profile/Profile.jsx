import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({ profilePage, dispatch }) => {
  return (
    <div>
      <ProfileInfo profileInfo={profilePage.profileInfo} />
      <MyPosts
        postData={profilePage.postData}
        newPostText={profilePage.newPostText}
        profileInfo={profilePage.profileInfo}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
