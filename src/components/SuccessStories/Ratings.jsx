import classes from './Ratings.module.css';

const Ratings = ({ rating }) => {
  return (
    <div className={classes.ratings}>
      {/* dynamic icons rendering */}
      {[...Array(rating)].map((val, index) => (<i key={index} className='fa fa-star'></i>)) }
    </div>
  );
};

export default Ratings;
