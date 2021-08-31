import Vector from './Vector';
import Countdown from 'react-countdown';
import classes from './DiscountPopup.module.css';

const DiscountPopup = () => {
  return (
    <div className={classes.discount}>
      <Vector />
      <span>
        50% discount only valid for
        <strong>
          <Countdown date={Date.now() + 10000}></Countdown>
        </strong>
      </span>
    </div>
  );
};

export default DiscountPopup;
