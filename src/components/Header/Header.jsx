import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <span>
        Over <strong>52150</strong> plans ordered.
      </span>
      <h1>Get access to your yoga program now!</h1>
    </div>
  );
};

export default Header;
