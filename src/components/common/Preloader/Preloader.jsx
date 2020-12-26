import React from "react";
import spinner from "../../../assets/icons/spinner.svg";

const Preloader = () => {
  return (
    <div>
      <img src={spinner} alt="" />
    </div>
  );
};

export default Preloader;
