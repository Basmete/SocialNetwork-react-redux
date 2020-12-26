import React from "react";
import * as c from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem({ name, id }) {
  const path = `/dialogs/${id}`;
  return (
    <div className={`${c.dialog} ${c.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
