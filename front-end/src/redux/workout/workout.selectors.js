import { createSelector } from 'reselect';

const selectWorkout = state => state.workout;

export const selectWorkoutExercises = createSelector(
  [selectWorkout],
  workout => workout.workoutExercises
);

export const selectIsImage = createSelector([selectWorkout], workout => workout.isImage);

export const selectNextExerciseName = createSelector(
  [selectWorkout],
  workout => workout.nextExerciseName
);

export const selectStartButtonIsActive = createSelector(
  [selectWorkout],
  workout => workout.startButtonIsActive
);

export const selectIsWorkoutFetching = createSelector(
  [selectWorkout],
  workout => workout.isFetching
);

export const selectActiveExercise = createSelector([selectWorkoutExercises], exercises =>
  exercises.find(ex => ex.isActive === true)
);

export const selectNextExerciseLink = createSelector(
  [selectWorkout],
  workout => workout.nextExerciseLink
);
