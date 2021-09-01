import React, { useState } from 'react';
import PlanCard from './PlanCard';
import Button from '../../Button/Button';
import classes from './PlanSelection.module.css';
import image from '../../../static/safe-checkout.png';
import Subtitle from '../../Subtitle/Subtitle';

const PlanSelection = () => {
  const [checkedPlan, setCheckedPlan] = useState(0);
  // sample data
  const membershipPlans = [
    {
      id: 1,
      contractLength: 6,
      monthlyPrice: 19.98,
      discountPercentage: 50,
      billPeriod: 6,
    },
    {
      id: 2,
      contractLength: 3,
      monthlyPrice: 19.99,
      discountPercentage: 25,
      billPeriod: 3,
    },
    {
      id: 3,
      contractLength: 1,
      monthlyPrice: 19.99,
      discountPercentage: 0,
      billPeriod: 1,
    },
  ];

  return (
    <div className={classes.selection}>
      <Subtitle>
        Choose your plan and get <span className={classes['main-color']}>7 days free trial</span>
      </Subtitle>
      {/* dynamic card creation & selection */}
      {membershipPlans.map((onePlan) => (
        <PlanCard plan={onePlan} key={onePlan.id} checkedPlan={checkedPlan} setCheckedPlan={setCheckedPlan} />
      ))}
      <Button>Get your plan</Button>
      <div className={classes.agreement}>
        <p>
          Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. to
          cancel your subscription, please contact us at least 24 hours before the end of the trial period.
        </p>
        <p>
          By choosing a payment method you agree to the <a href='/'>T&amp;Cs</a> and <a href='/'>Privacy Policy</a>
        </p>
        <img src={image} alt='safe checkout icon' />
      </div>
    </div>
  );
};

export default PlanSelection;
