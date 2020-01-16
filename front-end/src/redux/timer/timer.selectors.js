import { createSelector } from 'reselect';

const selectTimer = state => state.timer;

export const selectTimerStarted = createSelector(
    [selectTimer],
    timer => timer.started
);

export const selectTimerColor = createSelector(
    [selectTimer],
    timer => timer.timerColor
);

export const selectTimerExerciseTime = createSelector(
    [selectTimer],
    timer => timer.exerciseTime
);

export const selectTimerRest = createSelector(
    [selectTimer],
    timer => timer.rest
);

export const selectTimerPaused = createSelector(
    [selectTimer],
    timer => timer.paused
);

export const selectButtonTitle = createSelector(
    [selectTimer],
    timer => timer.buttonTitle
)