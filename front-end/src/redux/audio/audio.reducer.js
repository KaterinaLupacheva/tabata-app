import AudioActionTypes from './audio.types';

const INITIAL_STATE = {
    audioStatusStop: 'STOPPED',
    audioStatusStart: 'STOPPED'
};

const audioReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AudioActionTypes.TOGGLE_STOP:
            return {
                ...state,
                audioStatusStop: state.audioStatusStop === 'STOPPED' ? 'PLAYING' : 'STOPPED'
            };
        case AudioActionTypes.TOOGLE_START:
            return {
                ...state,
                audioStatusStart: state.audioStatusStart === 'STOPPED' ? 'PLAYING' : 'STOPPED'
            };
        default:
            return state;
    }
};

export default audioReducer;