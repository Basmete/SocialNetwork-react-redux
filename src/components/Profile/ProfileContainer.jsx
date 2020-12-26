import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfileThunk,
  updateStatus,
} from "../../redux/reducers/profileReducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer(props) {
  React.useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUserId;
      if (!userId) {
        props.history.push("/login");
      }
    }

    props.getUserProfileThunk(userId);
    props.getStatus(userId);
  }, []);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
  };
};

const mapDispatchToProps = {
  getUserProfileThunk,
  getStatus,
  updateStatus,
};

export default compose(
  withRouter,
  // withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
