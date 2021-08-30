import { useState } from 'react';
import Subtitle from './../../UI/Subtitle';
import StoryCard from './StoryCard';
import classes from './SuccessStories.module.css';
import emilyImg from '../../static/succesStories/emily.jpeg';
import kylieImg from '../../static/succesStories/kylie.jpeg';
import jessicaImg from '../../static/succesStories/jessica.jpeg';
import Button from './../../UI/Button';

const SuccessStories = () => {
  const [stories, setStories] = useState([
    {
      id: 's1',
      name: 'Emily',
      age: 28,
      location: 'Delaware, NJ',
      rating: 5,
      imgUrl: emilyImg,
      story:
        'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.',
    },
    {
      id: 's2',
      name: 'Kylie',
      age: 40,
      location: 'Los Angeles, CA',
      rating: 5,
      imgUrl: kylieImg,
      story:
        'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
    },
    {
      id: 's3',
      name: 'Jesica',
      age: 28,
      location: 'San Francisco, CA',
      rating: 5,
      imgUrl: jessicaImg,
      story:
        'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.',
    },
  ]);

  return (
    <div className={classes.success}>
      <Subtitle>Hear success stories from our clients</Subtitle>
      <div className={classes.cards}>
        {stories.map((story) => (
          <StoryCard story={story} />
        ))}
      </div>
      <Button className={classes.btn}>Get my plan</Button>
    </div>
  );
};

export default SuccessStories;
