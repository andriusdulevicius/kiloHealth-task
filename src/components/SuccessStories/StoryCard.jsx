import React from 'react';
import classes from './StoryCard.module.css';
import Ratings from './Ratings';

const StoryCard = (props) => {
  const { name, age, location, rating, imgUrl, story, active } = props.story;
  return (
    <div className={classes['one-card']}>
      <h3>
        {name}, {age}
      </h3>
      <h5>{location}</h5>
      <Ratings rating={rating} />
      <div>
        <img src={imgUrl} alt='successfull people' />
      </div>
      <p>{story}</p>
    </div>
  );
};

export default StoryCard;
