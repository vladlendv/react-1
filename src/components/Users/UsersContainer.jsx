import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";
import { connect } from "react-redux/es/exports";
import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  pageChanged(pageNumber) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        pageChanged={this.pageChanged.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(followActionCreator(id)),
  unfollow: (id) => dispatch(unfollowActionCreator(id)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
  setCurrentPage: (page) => dispatch(setCurrentPageActionCreator(page)),
  setTotalUsersCount: (count) =>
    dispatch(setTotalUsersCountActionCreator(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
