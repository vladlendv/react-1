import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store}) => {
  return (
    <div>
      <ProfileInfo profileInfo={store.getState().profilePage.profileInfo} />
      <MyPostsContainer
        store={store}
      />
    </div>
  );
};

export default Profile;
