import React from 'react';
import PlanSelection from './PlanSelection/PlanSelection';
import ProgramPerksList from './ProgramPerks/ProgramPerksList';
import classes from './ProgramSection.module.css';

const ProgramSection = () => {
  return (
    <div className={classes.plans}>
      <PlanSelection />
      <ProgramPerksList />
    </div>
  );
};

export default ProgramSection;
