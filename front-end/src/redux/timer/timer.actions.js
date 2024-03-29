import TimerActionTypes from './timer.types';

export const toggleTimer = () => ({
  type: TimerActionTypes.TOGGLE_TIMER,
});

export const toggleTimerColor = () => ({
  type: TimerActionTypes.TOGGLE_TIMER_COLOR,
});

export const toggleButtonTitle = () => ({
  type: TimerActionTypes.TOGGLE_BUTTON_TITLE,
});
