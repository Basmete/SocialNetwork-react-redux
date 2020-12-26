import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreator,
  follow,
  unfollow,
} from "../../redux/reducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector,
} from "../../redux/selectors/usersSelectors";

const UsersContainer = (props) => {
  React.useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) =>
    props.getUsers(pageNumber, props.pageSize);
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        onPageChanged={onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        users={props.users}
        unfollow={props.unfollow}
        follow={props.follow}
        followingInProgress={props.followingInProgress}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsersThunkCreator,
};

export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
