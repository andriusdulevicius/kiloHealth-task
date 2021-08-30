import React from 'react';

const PlanCard = ({ plan }) => {
  const { contractLength, monthlyPrice, discountPercentage, billPeriod } = plan;

  const priceAfterDiscount = +((monthlyPrice * discountPercentage) / 100).toFixed(2);

  const fullPeriodPrice = +monthlyPrice * contractLength.toFixed(2);
  const fullPeriodDiscountedPrice = +priceAfterDiscount * contractLength.toFixed(2);

  const fullPriceOrDiscountedPrice =
    discountPercentage > 0 ? <span>{fullPeriodPrice}</span> + ' ' + fullPeriodDiscountedPrice : fullPeriodPrice;

  return (
    <div>
      <div className='details'>
        <h4>
          {contractLength} month plan {discountPercentage > 0 && <span>Save {discountPercentage}%</span>}
        </h4>
        <h4>
          ${discountPercentage > 0 ? priceAfterDiscount : monthlyPrice} <small> / month</small>
        </h4>
        {billPeriod === 1 && <h5>'Billed monthly'</h5>}
        {billPeriod > 1 && (
          <h5>
            {' '}
            {fullPriceOrDiscountedPrice} billed every {billPeriod} months
          </h5>
        )}
      </div>
      <div className='checkbox'></div>
    </div>
  );
};

export default PlanCard;
