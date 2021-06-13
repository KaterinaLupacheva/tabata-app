import React, { useEffect } from 'react';

import './exercise-item.styles.scss';

const ExerciseItem = props => {
  const ref = React.createRef();

  useEffect(() => {
    if (props.isActive) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return (
    <div className={`${props.isActive ? 'active' : ''} exercise-item`} ref={ref}>
      <span>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
    </div>
  );
};

export default ExerciseItem;
