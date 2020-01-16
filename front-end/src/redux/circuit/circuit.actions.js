import CircuitActionTypes from './circuit.types';
import { CIRCUITS_NUMBER } from '../base-data';

export const fetchCircuits = () => ({
    type: CircuitActionTypes.FETCH_CIRCUITS,
    payload: CIRCUITS_NUMBER
});

export const changePressedCircuit = pressedCircuit => ({
    type: CircuitActionTypes.CHANGE_PRESSED_CIRCUIT,
    payload: pressedCircuit
});

export const findPressedCircuit = circuitOptions => ({
    type: CircuitActionTypes.FIND_PRESSED_CIRCUIT,
    payload: circuitOptions
});

export const incrementCurrentCircuit = () => ({
    type: CircuitActionTypes.INCREMENT_CURRENT_CIRCUIT
});