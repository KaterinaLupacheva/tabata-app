import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './workout-page.styles.scss';
import AbsoluteWrapper from '../../components/absolute-wrapper/absolute-wrapper.component';
import {
  selectWorkoutExercises,
  selectIsWithWeights,
  selectIsWorkoutFetching,
} from '../../redux/workout/workout.selectors';
import {
  fetchRandomWorkoutStartAsync,
  resetToInitialState,
  resetNextExercise,
} from '../../redux/workout/workout.actions';
import { selectAudioStartStatus, selectAudioStopStatus } from '../../redux/audio/audio.selectors';
import {
  selectSelectedDuration,
  selectDurationOptions,
} from '../../redux/duration/duration.selectors';
import { selectSelectedCircuit, selectCurrentCircuit } from '../../redux/circuit/circuit.selectors';
import { resetCurrentCircuit } from '../../redux/circuit/circuit.actions';
import { findPressedDuration } from '../../redux/duration/duration.actions';
import { selectSelectedMuscleGroup } from '../../redux/muscle-group/muscle-group.selectors';
import { toggleStart, toggleStop } from '../../redux/audio/audio.actions';
import { toggleTimer } from '../../redux/timer/timer.actions';
import ExercisesPreview from '../../components/exercises-preview/exercises-preview.component';
import PlaySound from '../../components/audio/audio.component';
import CircuitsAndTimer from '../../components/circuits-and-timer/circuits-and-timer.component';
import soundfileStop from '../../assets/3-2-1-stop.mp3';
import soundfileStart from '../../assets/1-2-3-start.mp3';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { VideoContextProvider } from '../../contexts/video.context';

const ExercisesPreviewWithSpinner = WithSpinner(ExercisesPreview);

class WorkoutPage extends React.Component {
  state = {
    showGetReady: true,
  };

  componentDidMount() {
    const {
      workout,
      fetchRandomWorkoutStartAsync,
      resetToInitialState,
      selectedDuration,
      selectedMuscleGroup,
      resetCurrentCircuit,
      resetNextExercise,
      isWithWeights,
    } = this.props;
    resetToInitialState();
    resetCurrentCircuit();
    resetNextExercise();
    if (workout.length === 0 && selectedDuration.length !== 0 && selectedMuscleGroup !== 0) {
      fetchRandomWorkoutStartAsync(selectedDuration * 2, selectedMuscleGroup, isWithWeights);
    } else if (workout.length === 0) {
      this.props.history.push('/create-workout');
    }
  }

  handleCompleteTimer = time => {
    const { toggleStop } = this.props;
    toggleStop();
    this.props.history.push({
      pathname: '/finished',
    });
  };

  handleWorkoutStart = () => {
    const { currentCircuit, workout, toggleTimer, toggleStart } = this.props;
    if (currentCircuit === 1 && workout.find(ex => ex.isActive === true) === undefined) {
      toggleTimer();
      toggleStart();
      this.setState({ showGetReady: false });
    } else {
      toggleStart();
    }
  };

  render() {
    const { audioStatusStop, audioStatusStart, toggleStop, isWorkoutFetching } = this.props;
    return (
      <AbsoluteWrapper>
        <div className="workout-page">
          <VideoContextProvider>
            <CircuitsAndTimer handleCompleteTimer={this.handleCompleteTimer} />
            <ExercisesPreviewWithSpinner
              isLoading={isWorkoutFetching}
              showGetReady={this.state.showGetReady}
            />
          </VideoContextProvider>
          <PlaySound
            audioFile={soundfileStop}
            status={audioStatusStop}
            onFinishedPlaying={() => toggleStop()}
          />
          <PlaySound
            audioFile={soundfileStart}
            status={audioStatusStart}
            onFinishedPlaying={() => this.handleWorkoutStart()}
          />
        </div>
      </AbsoluteWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  workout: selectWorkoutExercises,
  audioStatusStop: selectAudioStopStatus,
  audioStatusStart: selectAudioStartStatus,
  durationOptions: selectDurationOptions,
  selectedDuration: selectSelectedDuration,
  selectedMuscleGroup: selectSelectedMuscleGroup,
  numberOfCircuits: selectSelectedCircuit,
  isWorkoutFetching: selectIsWorkoutFetching,
  currentCircuit: selectCurrentCircuit,
  isWithWeights: selectIsWithWeights,
});

const mapDispatchToProps = dispatch => ({
  fetchRandomWorkoutStartAsync: (numOfExercises, muscleGroup, checked) =>
    dispatch(fetchRandomWorkoutStartAsync(numOfExercises, muscleGroup, checked)),
  toggleStart: () => dispatch(toggleStart()),
  toggleStop: () => dispatch(toggleStop()),
  findPressedDuration: options => dispatch(findPressedDuration(options)),
  toggleTimer: () => dispatch(toggleTimer()),
  resetToInitialState: () => dispatch(resetToInitialState()),
  resetCurrentCircuit: () => dispatch(resetCurrentCircuit()),
  resetNextExercise: () => dispatch(resetNextExercise()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
