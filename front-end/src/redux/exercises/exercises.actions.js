import ExercisesActionTypes from './exercises.types';
import { path } from '../../pages/url';

export const toggleButtonPressed = exercise => ({
  type: ExercisesActionTypes.TOGGLE_BUTTON_PRESSED,
  payload: exercise,
});

export const fetchExercisesStart = () => ({
  type: ExercisesActionTypes.FETCH_EXERCISES_START,
});

export const fetchExercisesSuccess = currentExercises => ({
  type: ExercisesActionTypes.FETCH_EXERCISES_SUCCESS,
  payload: currentExercises,
});

export const fetchExercisesFailure = errorMessage => ({
  type: ExercisesActionTypes.FETCH_EXERCISES_FAILURE,
  payload: errorMessage,
});

export const fetchExercisesStartAsync = muscleGroup => {
  return dispatch => {
    const response = fetch(`${path}/exercises/${muscleGroup}`);
    dispatch(fetchExercisesStart());
    response
      .then(response => response.json())
      .then(exercises => {
        const newExercises = exercises.map(obj => ({
          ...obj,
          isPressed: false,
        }));
        dispatch(fetchExercisesSuccess(newExercises));
      })
      .catch(error => dispatch(fetchExercisesFailure(error.message)));
  };
};

export const showNextExercises = () => ({
  type: ExercisesActionTypes.SHOW_NEXT_EXERCISES,
});

export const showPrevExercises = () => ({
  type: ExercisesActionTypes.SHOW_PREV_EXERCISES,
});
