import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectTimerStarted,
  selectTimerColor,
  selectTimerExerciseTime,
  selectTimerPaused,
} from '../../redux/timer/timer.selectors';
import { setActiveExercise } from '../../redux/workout/workout.actions';
import './timer.styles.scss';

import TimerMachine from 'react-timer-machine';
import moment from 'moment';

const Timer = ({
  handleCompleteTimer,
  handleTick,
  timerColor,
  exerciseTime,
  paused,
  started,
  setActiveExercise,
}) => {
  return (
    <div className="timer" style={{ color: timerColor }}>
      <TimerMachine
        timeStart={exerciseTime}
        countdown={true}
        formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('ss')}
        paused={paused}
        started={started}
        onComplete={time => handleCompleteTimer(time)}
        onStart={() => setActiveExercise()}
        onTick={time => handleTick(time)}
        onPause={time => console.info(`Timer paused: ${JSON.stringify(time)}`)}
        onResume={time => console.info(`Timer resumed: ${JSON.stringify(time)}`)}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  started: selectTimerStarted,
  timerColor: selectTimerColor,
  exerciseTime: selectTimerExerciseTime,
  paused: selectTimerPaused,
});

const mapDispatchToProps = dispatch => ({
  setActiveExercise: () => dispatch(setActiveExercise()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
