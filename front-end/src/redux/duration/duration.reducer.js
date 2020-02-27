import DurationActionTypes from './duration.types';
import { createArray, changePressed, findPressedOption, setPressed } from '../param.utils';

const INITIAL_STATE = {
  durationOptions: [],
  selectedDuration: '',
};

const durationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DurationActionTypes.FETCH_DURATIONS:
      return {
        ...state,
        durationOptions: createArray(action.payload),
        selectedDuration: setPressed(action.payload)[0],
      };
    case DurationActionTypes.CHANGE_PRESSED_DURATION:
      return {
        ...state,
        durationOptions: changePressed(state.durationOptions, action.payload),
      };
    case DurationActionTypes.FIND_PRESSED_DURATION:
      return {
        ...state,
        selectedDuration: findPressedOption(action.payload).split(' ')[0],
      };
    default:
      return state;
  }
};

export default durationReducer;
