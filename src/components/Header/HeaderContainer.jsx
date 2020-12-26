import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout, setAuthUserData } from "../../redux/reducers/authReducer";

function HeaderContainer(props) {
  return <Header {...props} />;
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});
const mapDispatchToProps = {
  setAuthUserData,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
