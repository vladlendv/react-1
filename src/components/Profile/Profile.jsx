import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
