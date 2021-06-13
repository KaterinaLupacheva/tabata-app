import DurationActionTypes from './duration.types';
import { DURATIONS_DATA } from '../base-data';

export const fetchDurations = () => ({
  type: DurationActionTypes.FETCH_DURATIONS,
  payload: DURATIONS_DATA,
});

export const changePressedDuration = pressedDuration => ({
  type: DurationActionTypes.CHANGE_PRESSED_DURATION,
  payload: pressedDuration,
});

export const findPressedDuration = durationOptions => ({
  type: DurationActionTypes.FIND_PRESSED_DURATION,
  payload: durationOptions,
});
