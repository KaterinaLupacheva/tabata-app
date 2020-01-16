import React from 'react';
import ReactNoSleep from 'react-no-sleep';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { toggleTimer, toggleTimerColor } from '../../redux/timer/timer.actions';
import { selectTimerRest, selectButtonTitle } from '../../redux/timer/timer.selectors';
import { selectWorkoutExercises, selectStartButtonIsActive } from '../../redux/workout/workout.selectors';
import { selectSelectedCircuit, selectCurrentCircuit } from '../../redux/circuit/circuit.selectors';
import { previewNextExercise } from '../../redux/workout/workout.actions';
import { toggleStart, toggleStop } from '../../redux/audio/audio.actions';
import { incrementCurrentCircuit } from '../../redux/circuit/circuit.actions';
import { resetToInitialState } from  '../../redux/workout/workout.actions';

import './timer-with-button.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import Timer from '../timer/timer.component';

class TimerWithButton extends React.Component {

    handleTick = time => {
        const { rest, currentCircuit, numberOfCircuits, workout, toggleTimerColor, previewNextExercise,
            toggleStop, toggleStart } = this.props;
        if(time.s === rest && currentCircuit === numberOfCircuits && workout[workout.length-1].isActive) {
            toggleTimerColor();
        } else if (time.s === rest) {
            toggleTimerColor();
            previewNextExercise(workout);
        } else if(time.s === (rest + 3)) {
            toggleStop();
        } else if(time.s === 3 && !workout[workout.length-1].isActive) {
            toggleStart()
        } else if(time.s === 3 && currentCircuit !== numberOfCircuits) {
            toggleStart();
        } 
    };

    handleCompleteTimer = () => {
        const { workout, numberOfCircuits, currentCircuit, resetToInitialState, incrementCurrentCircuit,
            toggleTimerColor } = this.props;
        if(workout[workout.length - 1].isActive !== true) {
            toggleTimerColor();
        } else if(workout[workout.length - 1].isActive === true 
                && numberOfCircuits > 1 
                && currentCircuit !== numberOfCircuits) {
                    resetToInitialState();
                    incrementCurrentCircuit();
                    toggleTimerColor();
        }  else {
            this.props.handleCompleteTimer();
        }
    };

    render() {
        const { toggleTimer, buttonTitle, startButtonIsActive } = this.props;
        return (
             <ReactNoSleep>
                {({ isOn, enable, disable }) => (
                    <div className='timer-container'>    
                        <Timer 
                            handleCompleteTimer={() => this.handleCompleteTimer()} 
                            handleTick={(time) => this.handleTick(time)} 
                        />
                        <CustomButton 
                            onClick={() => {
                                toggleTimer();
                                isOn=enable();
                                }} 
                            isActive={startButtonIsActive}
                        >
                            {buttonTitle}
                        </CustomButton>
                    </div>
                )}
             </ReactNoSleep>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    rest: selectTimerRest,
    buttonTitle: selectButtonTitle,
    workout: selectWorkoutExercises,
    numberOfCircuits: selectSelectedCircuit,
    currentCircuit: selectCurrentCircuit,
    startButtonIsActive: selectStartButtonIsActive
});

const mapDispatchToProps = dispatch => ({
    toggleTimer: () => dispatch(toggleTimer()),
    toggleTimerColor: () => dispatch(toggleTimerColor()),
    previewNextExercise: (workoutExercises) => dispatch(previewNextExercise(workoutExercises)),
    toggleStart: () => dispatch(toggleStart()),
    toggleStop: () => dispatch(toggleStop()),
    incrementCurrentCircuit: () => dispatch(incrementCurrentCircuit()),
    resetToInitialState: () => dispatch(resetToInitialState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerWithButton);