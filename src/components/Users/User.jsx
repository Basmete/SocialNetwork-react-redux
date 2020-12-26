import React from "react";
import styles from "./users.module.css";
import defaultAvatar from "../../assets/images/avatar_default.svg";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + props.id}>
            <img
              src={
                props.photos.large != null ? props.photos.large : defaultAvatar
              }
              alt="123"
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {props.followed ? (
            <button
              disabled={props.followingInProgress}
              onClick={() => props.unfollow(props.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress}
              onClick={() => props.follow(props.id)}
            >
              Follow
            </button>
          )}
        </div>
      </span>

      <span>
        <span>
          <div>{props.name}</div>
          <div>{props.status}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
