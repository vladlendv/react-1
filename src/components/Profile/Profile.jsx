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
        addPost={props.addPost}
        addCharAtPost={props.addCharAtPost}
      />
    </div>
  );
}

export default Profile;