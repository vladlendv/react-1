import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} />
    </div>
  );
}
