import React from 'react';

import './exercise-image.styles.scss';

const ExerciseImage = ({ link, height }) => (
  <div className="exercise-image" style={{ height: `${height}` }}>
    <img src={`${link}`} alt="execise" />
  </div>
);

export default ExerciseImage;
