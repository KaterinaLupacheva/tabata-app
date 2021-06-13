import MuscleGroupActionTypes from './muscle-group.types';
import { MUSCLE_GROUPS } from '../base-data';

export const fetchMuscleGroups = () => ({
  type: MuscleGroupActionTypes.FETCH_MUSCLE_GROUPS,
  payload: MUSCLE_GROUPS,
});

export const changePressedMuscleGroup = pressedMuscleGroup => ({
  type: MuscleGroupActionTypes.CHANGE_PRESSED_MUSCLE_GROUPS,
  payload: pressedMuscleGroup,
});

export const findPressedMuscleGroup = muscleGroupOptions => ({
  type: MuscleGroupActionTypes.FIND_PRESSED_MUSCLE_GROUPS,
  payload: muscleGroupOptions,
});
