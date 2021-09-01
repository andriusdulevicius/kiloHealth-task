import classes from './PlanCard.module.css';

const PlanCard = ({ plan, checkedPlan, setCheckedPlan }) => {

  const { id, contractLength, monthlyPrice, discountPercentage, billPeriod } = plan;

  const priceAfterDiscount = +(monthlyPrice - (monthlyPrice * discountPercentage) / 100).toFixed(2);

  const fullPeriodPrice = (monthlyPrice * contractLength).toFixed(2);
  const fullPeriodDiscountedPrice = +priceAfterDiscount * contractLength.toFixed(2);

  return (
    <div className={`${classes.card} ${checkedPlan === id && classes.active}`} onClick={() => setCheckedPlan(id)}>
      <div className={classes.details}>
        <h4>
          {contractLength} month plan
          {discountPercentage > 0 && <span className={classes.discount}>Save {discountPercentage}%</span>}
        </h4>
        <h4 className={classes['main-price']}>
          ${discountPercentage > 0 ? priceAfterDiscount : monthlyPrice} <small> / month</small>
        </h4>
        {billPeriod === 1 && <h5>Billed monthly</h5>}
        {billPeriod > 1 && (
          <h5>
            <span className={discountPercentage > 0 && classes['line-through']}> {`$${fullPeriodPrice}`}</span>
            {discountPercentage > 0 && (
              <span className={classes['main-color']}>{`$${fullPeriodDiscountedPrice} `}</span>
            )}
            billed every {billPeriod} months
          </h5>
        )}
      </div>
      <div>
        <div className={checkedPlan === id ? classes['icon-filled'] : classes['icon-empty']}
        ></div>
      </div>
    </div>
  );
};

export default PlanCard;
