import AudioActionTypes from './audio.types';

const INITIAL_STATE = {
  audioStatusStop: 'STOPPED',
  audioStatusStart: 'STOPPED',
};

const audioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AudioActionTypes.TOGGLE_STOP:
      return {
        ...state,
        audioStatusStop: state.audioStatusStop === 'STOPPED' ? 'PLAYING' : 'STOPPED',
      };
    case AudioActionTypes.TOGGLE_START:
      return {
        ...state,
        audioStatusStart: state.audioStatusStart === 'STOPPED' ? 'PLAYING' : 'STOPPED',
      };
    case AudioActionTypes.TOGGLE_PAUSE_PLAY_STOP:
      return {
        ...state,
        audioStatusStop: state.audioStatusStop === 'PLAYING' ? 'PAUSED' : 'PLAYING',
      };
    case AudioActionTypes.TOGGLE_PAUSE_PLAY_START:
      return {
        ...state,
        audioStatusStart: state.audioStatusStart === 'PLAYING' ? 'PAUSED' : 'PLAYING',
      };
    default:
      return state;
  }
};

export default audioReducer;
