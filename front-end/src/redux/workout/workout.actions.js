import WorkoutActionTypes from './workout.types';
import { path } from '../../pages/url';

export const toggleExercise = exerciseToToggle => ({
  type: WorkoutActionTypes.TOGGLE_EXERCISE,
  payload: exerciseToToggle,
});

export const fetchRandomWorkoutStart = () => ({
  type: WorkoutActionTypes.FETCH_RANDOM_WORKOUT_START,
});

export const fetchRandomWorkoutSuccess = workoutExercises => ({
  type: WorkoutActionTypes.FETCH_RANDOM_WORKOUT_SUCCESS,
  payload: workoutExercises,
});

export const fetchRandomWorkoutFailure = errorMessage => ({
  type: WorkoutActionTypes.FETCH_RANDOM_WORKOUT_FAILURE,
  payload: errorMessage,
});

export const fetchRandomWorkoutStartAsync = (numOfExercises, muscleGroup, isWithWeights) => {
  return dispatch => {
    const response = fetch(
      `${path}/exercises/random/${numOfExercises}/${muscleGroup}?isWithWeights=${isWithWeights}`
    );
    dispatch(fetchRandomWorkoutStart());
    response
      .then(response => response.json())
      .then(exercises => {
        const newExercises = exercises.map(obj => ({
          ...obj,
          isActive: false,
        }));
        dispatch(fetchRandomWorkoutSuccess(newExercises));
      })
      .catch(error => dispatch(fetchRandomWorkoutFailure(error.message)));
  };
};

export const setActiveExercise = () => ({
  type: WorkoutActionTypes.SET_ACTIVE_EXERCISE,
});

export const resetToInitialState = () => ({
  type: WorkoutActionTypes.RESET_TO_INITIAL_STATE,
});

export const previewNextExercise = workoutExercises => ({
  type: WorkoutActionTypes.PREVIEW_NEXT_EXERCISE,
  payload: workoutExercises,
});

export const resetNextExercise = () => ({
  type: WorkoutActionTypes.RESET_NEXT_EXERCISE,
});

export const toggleWeights = () => ({
  type: WorkoutActionTypes.TOGGLE_WEIGHTS,
});
