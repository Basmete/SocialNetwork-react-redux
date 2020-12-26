import React from "react";
import LikesPanel from "./LikesPanel";
import classes from "./Post.module.css";

function Post({ message, likesCount }) {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu8a4W0Jwrsqjzt8Kmt9vMn4LCsDviwhFZwA&usqp=CAU"
        alt="123"
        className={classes.itemAva}
      />
      <div>
        <p>{message}</p>
        <LikesPanel likesCount={likesCount} />
      </div>
    </div>
  );
}

export default Post;
