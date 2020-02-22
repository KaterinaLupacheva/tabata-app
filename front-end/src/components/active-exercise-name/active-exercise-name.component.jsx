import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveExercise } from '../../redux/workout/workout.selectors';

import './active-exercise-name.styles.scss';

const ActiveExerciseName = ({ activeExercise }) => (
  <div className="active-exercise-name">
    {activeExercise !== undefined ? activeExercise.name : ''}
  </div>
);

const mapStateToProps = createStructuredSelector({
  activeExercise: selectActiveExercise,
});

export default connect(mapStateToProps)(ActiveExerciseName);
