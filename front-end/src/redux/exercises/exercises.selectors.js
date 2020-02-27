import { createSelector } from 'reselect';

const selectRootExercises = state => state.exercises;

export const selectExercises = createSelector(
  [selectRootExercises],
  exercises => exercises.currentExercises
);

export const selectExercisesForPreview = createSelector([selectExercises], exercises =>
  exercises ? Object.keys(exercises).map(key => exercises[key]) : []
);

export const selectIsExercisesFetching = createSelector(
  [selectRootExercises],
  exercises => exercises.isFetching
);

export const selectNumOfShowingEx = createSelector(
  [selectRootExercises],
  exercises => exercises.numOfShowingEx
);

export const selectIndexOfFirstShowingEx = createSelector(
  [selectRootExercises],
  exercises => exercises.indexOfFirstShowingEx
);
