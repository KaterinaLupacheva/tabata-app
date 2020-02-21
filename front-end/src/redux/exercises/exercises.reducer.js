import ExercisesActionTypes from "./exercises.types";
import { toggleButtonPressed } from "./exercises.utils";

const INITIAL_STATE = {
  currentExercises: null,
  isFetching: false,
  errorMessage: undefined,
  numOfShowingEx: 9,
  indexOfFirstShowingEx: 0
};

const exercisesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExercisesActionTypes.FETCH_EXERCISES_START:
      return {
        ...state,
        isFetching: true
      };
    case ExercisesActionTypes.FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentExercises: action.payload,
        indexOfFirstShowingEx: 0
      };
    case ExercisesActionTypes.FETCH_EXERCISES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ExercisesActionTypes.TOGGLE_BUTTON_PRESSED:
      return {
        ...state,
        currentExercises: toggleButtonPressed(
          state.currentExercises,
          action.payload
        )
      };
    case ExercisesActionTypes.SHOW_NEXT_EXERCISES:
      return {
        ...state,
        indexOfFirstShowingEx:
          state.indexOfFirstShowingEx + state.numOfShowingEx
      };
    case ExercisesActionTypes.SHOW_PREV_EXERCISES:
      return {
        ...state,
        indexOfFirstShowingEx:
          state.indexOfFirstShowingEx - state.numOfShowingEx >= 0
            ? state.indexOfFirstShowingEx - state.numOfShowingEx
            : 0
      };
    default:
      return state;
  }
};

export default exercisesReducer;
