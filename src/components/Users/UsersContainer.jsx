import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";
import { connect } from "react-redux/es/exports";
import Users from "./Users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(followActionCreator(id)),
  unfollow: (id) => dispatch(unfollowActionCreator(id)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
