import React from 'react';
import classes from './Ratings.module.css';

const Ratings = ({ rating }) => {
  return (
    <div className={classes.ratings}>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
    </div>
  );
};

export default Ratings;
