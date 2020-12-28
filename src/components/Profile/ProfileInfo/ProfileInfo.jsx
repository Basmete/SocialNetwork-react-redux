import React from "react";
import * as styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import defaultAvatar from "../../../assets/images/avatar_default.svg";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  console.log(props.profile)

  const {
    aboutMe,
    fullName,
    photos,
    lookingForAJobDescription,
  } = props.profile;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div>
        <img
          src="https://misea.ru/images/u/pages/rabochij-stol-foto-kartinki-podborki-kartinki-kosmosa-na-rabochij-stol-cover-155.jpg"
          alt="123"
        />
      </div>
      <div className={styles.descriptionBlock}>
        <p>{fullName}</p>
        <p>{aboutMe}</p>
        <img src={photos.large || defaultAvatar} alt="avatar" className={styles.avatar} />
        <p>{lookingForAJobDescription}</p>
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
