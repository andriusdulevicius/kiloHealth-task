import React from 'react';
import classes from './Subtitle.module.css';

const Subtitle = (props) => {
  return (
    <div className={classes.title}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default Subtitle;
