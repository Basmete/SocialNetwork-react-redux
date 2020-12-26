import React from 'react';
import classes from './LikesPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function LikesPanel({ likesCount }) {
  return (
    <div className={classes.likesPanel}>
      <div className={classes.relativeWrapper}>
        <FontAwesomeIcon icon={faThumbsUp} className={classes.like} />
        {likesCount}
        <FontAwesomeIcon icon={faThumbsDown} className={classes.dislike} />
      </div>
    </div>
  );
}

export default LikesPanel;
