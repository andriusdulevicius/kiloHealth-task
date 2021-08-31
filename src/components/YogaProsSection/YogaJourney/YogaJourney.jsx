import React from 'react';
import Subtitle from '../../../UI/Subtitle';
import image from '../../../static/phone.jpg';
import classes from './YogaJourney.module.css';

const YogaJourney = () => {
  return (
    <div className={classes.container}>
      <Subtitle>Start your yoga journey now!</Subtitle>
      <img src={image} className={classes.image} alt='phone browsing' />
    </div>
  );
};

export default YogaJourney;
