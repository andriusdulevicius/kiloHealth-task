import classes from './PerkItem.module.css';

const PerkItem = ({ perk }) => {
  return (
    <li className={classes.perk}>
      <i className={perk.icon}></i>
      <div className='perk-info'>
        <h4>{perk.title}</h4>
        <h5>{perk.subtitle}</h5>
      </div>
    </li>
  );
};

export default PerkItem;
