import { ReactComponent as Badge } from '../../static/icons/badge.svg';
import Countdown from 'react-countdown';
import classes from './DiscountPopup.module.css';

const DiscountPopup = () => {
  const CompletionList = () => <span style={{ color: 'red' }}>No longer valid!</span>;

  return (
    <div className={classes.discount}>
      <Badge />
      <span>
        50% discount only valid for
        <strong>
          <Countdown date={Date.now() + 1000000}>
            <CompletionList />
          </Countdown>
        </strong>
      </span>
    </div>
  );
};

export default DiscountPopup;
