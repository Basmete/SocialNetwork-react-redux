import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };

  return connect(mapStateToPropsForRedirect, null)(AuthRedirectComponent);
};
