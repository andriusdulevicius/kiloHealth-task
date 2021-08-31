import React from 'react';
import classes from './YogaProsSection.module.css';
import YogaJourney from './YogaJourney/YogaJourney';
import PositiveYogaList from './YogaPros/PositiveYogaList';

const YogaProsSection = () => {
  return (
    <div className={classes['pros-section']}>
      <PositiveYogaList />
      <YogaJourney />
    </div>
  );
};

export default YogaProsSection;
