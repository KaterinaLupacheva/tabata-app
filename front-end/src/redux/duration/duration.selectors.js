import { createSelector } from 'reselect';

const selectDuration = state => state.duration;

export const selectDurationOptions = createSelector(
  [selectDuration],
  duration => duration.durationOptions
);

export const selectSelectedDuration = createSelector(
  [selectDuration],
  duration => duration.selectedDuration
);
