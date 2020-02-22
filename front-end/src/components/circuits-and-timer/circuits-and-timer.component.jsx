import React from 'react';

import './circuits-and-timer.styles.scss';

import NumberOfCircuits from '../number-of-circuits/number-of-circuits.component';
import TimerWithButton from '../timer-with-button/timer-with-button.component';

const CircuitsAndTimer = ({ handleCompleteTimer }) => (
  <div className="circuits-and-timer-container">
    <NumberOfCircuits />
    <TimerWithButton handleCompleteTimer={handleCompleteTimer} />
  </div>
);

export default CircuitsAndTimer;
