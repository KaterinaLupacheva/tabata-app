import TimerActionTypes from "./timer.types";
import { RESET_STATE } from "../reset.type";

const INITIAL_STATE = {
  started: false,
  paused: false,
  buttonTitle: "Start",
  exerciseTime: 30 * 1000,
  rest: 10,
  timerColor: "white"
};

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TimerActionTypes.TOGGLE_TIMER:
      return {
        ...state,
        started: state.started === false ? true : true,
        paused: state.started === true ? !state.paused : false
      };
    case TimerActionTypes.TOGGLE_TIMER_COLOR:
      return {
        ...state,
        timerColor: state.timerColor === "white" ? "#E0314B" : "white"
      };
    case TimerActionTypes.TOGGLE_BUTTON_TITLE:
      return {
        ...state,
        buttonTitle: state.buttonTitle === "Start" ? "Pause" : "Start"
      };
    case RESET_STATE.type:
      return INITIAL_STATE;
    case TimerActionTypes.RESET_TO_INITIAL_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default timerReducer;
