import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        store={props.store}
      />
    </div>
  );
}

export default Profile;