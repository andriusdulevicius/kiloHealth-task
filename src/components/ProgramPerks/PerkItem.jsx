import classes from './PerkItem.module.css';

const PerkItem = ({ perk }) => {
  return (
    <li className={classes.perk}>
      <div className={classes.icon}>
        <i className={perk.icon}></i>
      </div>
      <div className='perk-info'>
        <h4>{perk.title}</h4>
        <span>{perk.subtitle}</span>
      </div>
    </li>
  );
};

export default PerkItem;
