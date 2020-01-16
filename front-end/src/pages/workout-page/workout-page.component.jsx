import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './workout-page.styles.scss';
import { selectWorkoutExercises } from '../../redux/workout/workout.selectors';
import { fetchRandomWorkoutStartAsync, resetToInitialState } from  '../../redux/workout/workout.actions';
import { selectIsWorkoutFetching } from '../../redux/workout/workout.selectors';
import { selectAudioStartStatus, selectAudioStopStatus } from '../../redux/audio/audio.selectors';
import { selectSelectedDuration, selectDurationOptions } from '../../redux/duration/duration.selectors';
import { selectSelectedCircuit } from '../../redux/circuit/circuit.selectors';
import { findPressedDuration } from '../../redux/duration/duration.actions';
import { selectSelectedMuscleGroup } from  '../../redux/muscle-group/muscle-group.selectors';
import { toggleStart, toggleStop } from '../../redux/audio/audio.actions';
import ExercisesPreview from '../../components/exercises-preview/exercises-preview.component';
import PlaySound from '../../components/audio/audio.component';
import CircuitsAndTimer from '../../components/circuits-and-timer/circuits-and-timer.component';
import soundfileStop from '../../assets/3-2-1-stop.mp3';
import soundfileStart from '../../assets/1-2-3-start.mp3';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ExercisesPreviewWithSpinner = WithSpinner(ExercisesPreview);

class WorkoutPage extends React.Component {

    componentDidMount() {
        const { workout, fetchRandomWorkoutStartAsync, resetToInitialState, 
        selectedDuration, selectedMuscleGroup } = this.props;
        resetToInitialState();
        if (workout.length === 0 && selectedDuration.length !==0 && selectedMuscleGroup !== 0) {
            fetchRandomWorkoutStartAsync(this.props.selectedDuration * 2, this.props.selectedMuscleGroup);
        } else if (workout.length === 0) {
            this.props.history.push('/create-workout');
        }
    }

    handleCompleteTimer = (time) => {
        this.props.history.push({
            pathname: '/finished'
        });
    }

    render() {
        const { audioStatusStop, audioStatusStart, toggleStart, toggleStop, numberOfCircuits, isWorkoutFetching } = this.props;
        return(
            <div className='workout-page'>
                <CircuitsAndTimer handleCompleteTimer={this.handleCompleteTimer} />
                <ExercisesPreviewWithSpinner isLoading={isWorkoutFetching} />
                <PlaySound 
                        audioFile={soundfileStop}
                        status={audioStatusStop} 
                        onFinishedPlaying={()=> toggleStop()}
                    />
                <PlaySound 
                        audioFile={soundfileStart}
                        status={audioStatusStart} 
                        onFinishedPlaying={()=> toggleStart()}
                />
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    workout: selectWorkoutExercises,
    audioStatusStop: selectAudioStopStatus,
    audioStatusStart: selectAudioStartStatus,
    durationOptions: selectDurationOptions,
    selectedDuration: selectSelectedDuration, 
    selectedMuscleGroup: selectSelectedMuscleGroup,
    numberOfCircuits: selectSelectedCircuit,
    isWorkoutFetching: selectIsWorkoutFetching
});

const mapDispatchToProps = dispatch => ({
  fetchRandomWorkoutStartAsync: (numOfExercises, muscleGroup) => dispatch(fetchRandomWorkoutStartAsync(numOfExercises, muscleGroup)),
  toggleStart: () => dispatch(toggleStart()),
  toggleStop: () => dispatch(toggleStop()),
  findPressedDuration: options => dispatch(findPressedDuration(options)),
  resetToInitialState: () => dispatch(resetToInitialState())  
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);