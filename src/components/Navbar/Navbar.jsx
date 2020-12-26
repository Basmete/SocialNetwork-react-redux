import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink activeClassName={classes.active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to="/users">
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to="./news">
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to="./music">
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to="./settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
