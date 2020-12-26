import React from "react";
import * as c from "../Dialogs.module.css";

function Message({ message }) {
  return <div className={c.dialog}>{message}</div>;
}

export default Message;
