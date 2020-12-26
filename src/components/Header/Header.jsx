import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={styles.header}>
      <img
        src="https://i.pinimg.com/originals/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg"
        alt="123"
      />
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
