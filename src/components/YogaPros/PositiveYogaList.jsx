import { useState } from 'react';
import classes from './PositiveYogaList.module.css';
import Subtitle from './../../UI/Subtitle';

const PositiveYogaList = () => {
  const [yogaPros, setYogaPros] = useState([
    'Each program adapts to your age or fitness level',
    'Mindful way to exercise and get real results',
    'Effective and long-term lasting results',
    'Suited activities that benefit both the mind and body',
    'Low-intensity but highly-effective workouts',
    'Extra attention to muscle, joint and back health',
  ]);

  return (
    <div className={classes['pros-list']}>
      <Subtitle>Is Positive Yoga right for me?</Subtitle>
      <ul>
        {yogaPros.map((oneAdv, index) => (
          <li key={index}>
            <i className='fa fa-check-circle-o'></i>
            <h5>{oneAdv}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositiveYogaList;
