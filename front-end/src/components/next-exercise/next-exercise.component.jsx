import React from 'react';

import './next-exercise.styles.scss';

const NextExercise = ({ visible, exerciseName }) => (
  <div className={`${visible ? 'visible' : ''} next-exercise`}>
    <span>NEXT</span>
    <span className="name">{exerciseName}</span>
  </div>
);

export default NextExercise;
