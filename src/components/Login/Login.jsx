import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/Input";
import { required } from "../../utils/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/reducers/authReducer";
import { Redirect } from "react-router";
import * as styles from "../common/FormControls/FormControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required]}
          component={Input}
          placeholder="Email"
          name="email"
        />
      </div>
      <div>
        <Field
          validate={[required]}
          component={Input}
          label="password"
          name="password"
          type="password"
        />
      </div>
      <div>
        <Field
          validate={[required]}
          component={Input}
          type="checkbox"
          name="rememberMe"
        />
        remember me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "loginForm",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
