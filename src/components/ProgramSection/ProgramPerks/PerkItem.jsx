import classes from './PerkItem.module.css';

const PerkItem = ({ perk }) => {
  return (
    <li className={classes.perk}>
      {/* dynamic class for each li icon */}
      <span className={`${classes.icon} ${classes[perk.icon]}`}></span>
      <div>
        <h4>{perk.title}</h4>
        <span>{perk.subtitle}</span>
      </div>
    </li>
  );
};

export default PerkItem;
