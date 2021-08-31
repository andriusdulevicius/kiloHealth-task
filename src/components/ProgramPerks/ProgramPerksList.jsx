import { useState } from 'react';
import PerkItem from './PerkItem';
import classes from './ProgramPerksList.module.css';
import Subtitle from './../../UI/Subtitle';

const ProgramPerksList = () => {
  const [perks, setPerks] = useState([
    {
      icon: 'icon1',
      title: 'A personalized yoga program',
      subtitle: 'Completely safe and focused on your key goals',
    },
    {
      icon: 'fa fa-female',
      title: 'Easy and enjoyable yoga workouts for your level',
      subtitle: 'Program ajusts to your level and pace',
    },
    {
      icon: 'fa fa-eye',
      title: 'No special preparation needed',
      subtitle: 'Perfect for begginners! Requires no special preparation or equipment',
    },
    {
      icon: 'fa fa-apple',
      title: 'Daily motivation and accountability',
      subtitle: 'Track your progress, develop a healthy routine, reach goals faster',
    },
    {
      icon: 'fa fa-bell',
      title: 'Browse from various yoga challenges',
      subtitle: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    },
    {
      icon: 'fa fa-mobile',
      title: 'Easy access on any device',
      subtitle: 'Do your yoga anywhere across all types of devices',
    },
    {
      icon: 'fa fa-book',
      title: 'A complete guide to get started',
      subtitle: 'Best tips, guidelines, advice, and recommendations for successful practice',
    },
  ]);
  return (
    <div className={classes['perk-list']}>
      <Subtitle>Whats in our program? </Subtitle>
      <ul>
        {perks.map((perk) => (
          <PerkItem perk={perk} key={perk.title} />
        ))}
      </ul>
    </div>
  );
};

export default ProgramPerksList;
