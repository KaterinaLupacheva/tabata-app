import MuscleGroupActionTypes from './muscle-group.types';
import { createArray, changePressed, findPressedOption, setPressed } from '../param.utils';

const INITIAL_STATE = {
    muscleGroupOptions: [],
    selectedMuscleGroup: ''
};

const muscleGroupReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MuscleGroupActionTypes.FETCH_MUSCLE_GROUPS:
            return {
                ...state,
                muscleGroupOptions: createArray(action.payload),
                selectedMuscleGroup: setPressed(action.payload)
            };
        case MuscleGroupActionTypes.CHANGE_PRESSED_MUSCLE_GROUPS:
            return {
                ...state,
                muscleGroupOptions: changePressed(state.muscleGroupOptions, action.payload),
            };
        case MuscleGroupActionTypes.FIND_PRESSED_MUSCLE_GROUPS:
            return {
                ...state,
                selectedMuscleGroup: findPressedOption(action.payload)
            };
        default:
            return state;
    }
};

export default muscleGroupReducer;