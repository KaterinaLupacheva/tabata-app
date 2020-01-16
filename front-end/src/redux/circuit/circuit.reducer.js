import CircuitActionTypes from './circuit.types';
import { createArray, changePressed, findPressedOption } from '../param.utils';

const INITIAL_STATE = {
    options: [],
    selectedCircuit: 1,
    currentCircuit: 1
};

const circuitReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CircuitActionTypes.FETCH_CIRCUITS:
            return {
                ...state,
                options: createArray(action.payload)
            };
        case CircuitActionTypes.CHANGE_PRESSED_CIRCUIT:
                return {
                    ...state,
                    options: changePressed(state.options, action.payload),
                };
        case CircuitActionTypes.FIND_PRESSED_CIRCUIT:
            return {
                ...state,
                selectedCircuit: parseInt(findPressedOption(action.payload)[0])
            };
        case CircuitActionTypes.INCREMENT_CURRENT_CIRCUIT:
            return {
                ...state,
                currentCircuit: state.currentCircuit + 1
            };
        default:
            return state;
    }
};

export default circuitReducer;