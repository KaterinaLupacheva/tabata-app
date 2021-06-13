import { createSelector } from 'reselect';

const selectMuscleGroup = state => state.muscleGroup;

export const selectMuscleGroupOptions = createSelector(
  [selectMuscleGroup],
  muscleGroup => muscleGroup.muscleGroupOptions
);

export const selectSelectedMuscleGroup = createSelector(
  [selectMuscleGroup],
  muscleGroup => muscleGroup.selectedMuscleGroup
);
