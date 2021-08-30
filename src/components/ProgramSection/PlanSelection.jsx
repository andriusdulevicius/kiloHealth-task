import { useState } from 'react';
import PlanCard from './PlanCard';
import Button from './../../UI/Button';

const PlanSelection = () => {
  const [membershipPlans, setMembershipPlans] = useState([
    {
      id: 'p1',
      contractLength: 6,
      monthlyPrice: 19.98,
      discountPercentage: 50,
      billPeriod: 6,
    },
    {
      id: 'p2',
      contractLength: 3,
      monthlyPrice: 19.99,
      discountPercentage: 25,
      billPeriod: 3,
    },
    {
      id: 'p3',
      contractLength: 1,
      monthlyPrice: 19.99,
      discountPercentage: 0,
      billPeriod: 1,
    },
  ]);

  return (
    <div>
      <h2>
        Choose your plan and get <span className='main-color'>7 days free trial</span>
      </h2>
      {membershipPlans.map((onePlan) => (
        <PlanCard plan={onePlan} key={onePlan.id} />
      ))}
      <Button>Get your plan</Button>
      <p>
        Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. to
        cancel your subscription, please contact us at least 24 hours before the end of the trial period.
      </p>
      <p>
        By choosing a payment method you agree to the <a href='/'>T&amp;Cs</a> and <a href='/'>Privacy Policy</a>
      </p>
      <img src='../../static/safe-checkout' alt='safe checkout icons' />
    </div>
  );
};

export default PlanSelection;
