import React from 'react';

import "./styles.css";

const Ability = ({ability}) => {
  return (
    <div className="ability">
      <div className="ability__name">
        { ability.ability.name }
      </div>
    </div>
  );
};

export default Ability;
