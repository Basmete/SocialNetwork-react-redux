import React, { useState } from "react";
import * as styles from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onInputHandler = (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  return (
    <>
      {editMode ? (
        <div>
          <input
            autoFocus
            onBlur={deactivateEditMode}
            value={status}
            onChange={onInputHandler}
          />
        </div>
      ) : (
        <div onDoubleClick={activateEditMode} className={styles.status}>
          <span>{props.status || "-----------"}</span>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
