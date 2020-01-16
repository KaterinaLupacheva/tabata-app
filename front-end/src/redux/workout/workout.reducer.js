import WorkoutActionTypes from './workout.types';
import { toggleExerciseInWorkout, setActiveExercise, getNextExerciseName, resetToInitialState } from './workout.utils';

const INITIAL_STATE = {
    workoutExercises: [],
    isFetching: false,
    errorMessage: undefined,
    nextExerciseName: '',
    isImage: true,
    startButtonIsActive: false
};

const workoutReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case WorkoutActionTypes.TOGGLE_EXERCISE:
            return {
                ...state,
                workoutExercises: toggleExerciseInWorkout(state.workoutExercises, action.payload),
                startButtonIsActive: true
            };
        case WorkoutActionTypes.FETCH_RANDOM_WORKOUT_START:
            return {
                ...state,
                isFetching: true
            };
        case WorkoutActionTypes.FETCH_RANDOM_WORKOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                workoutExercises: action.payload,
                startButtonIsActive: true
            };
        case WorkoutActionTypes.FETCH_RANDOM_WORKOUT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case WorkoutActionTypes.SET_ACTIVE_EXERCISE:
            return {
                ...state,
                workoutExercises: setActiveExercise(state.workoutExercises),
                isImage: true
            };
        case WorkoutActionTypes.RESET_TO_INITIAL_STATE:
            return {
                ...state,
                workoutExercises: resetToInitialState(state.workoutExercises),
                nextExerciseName: '',
                isImage: true
            };
        case WorkoutActionTypes.PREVIEW_NEXT_EXERCISE:
            return {
                ...state,
                nextExerciseName: getNextExerciseName(action.payload),
                isImage: false
            };
        case 'RESET':
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default workoutReducer;