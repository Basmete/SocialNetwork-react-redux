import React from "react";
import * as c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  const {
    aboutMe,
    fullName,
    photos,
    lookingForAJobDescription,
  } = props.profile;

  return (
    <div>
      <div>
        <img
          src="https://misea.ru/images/u/pages/rabochij-stol-foto-kartinki-podborki-kartinki-kosmosa-na-rabochij-stol-cover-155.jpg"
          alt="123"
        />
      </div>
      <div className={c.descriptionBlock}>
        <p>{fullName}</p>
        <p>{aboutMe}</p>
        <img src={photos.large} alt="" />
        <p>{lookingForAJobDescription}</p>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
