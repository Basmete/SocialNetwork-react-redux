import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";

import { withRouter } from "react-router";
import { initializeApp } from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { withLazyLoad } from "./hoc/withLazyLoad";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

const App = (props) => {
  React.useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <Container>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Suspense fallback={<Spinner animation={"grow"} />}>
                <DialogsContainer />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/profile/:userId?"
            render={withLazyLoad(ProfileContainer)}
          />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
});

const mapDispatchToProps = {
  initializeApp,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
