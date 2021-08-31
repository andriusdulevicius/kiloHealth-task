import React from 'react';
import PlanSelection from './PlanSelection';
import ProgramPerksList from '../ProgramPerks/ProgramPerksList';

const ProgramSection = () => {
  return (
    <div>
      <PlanSelection />
      <ProgramPerksList />
    </div>
  );
};

export default ProgramSection;
