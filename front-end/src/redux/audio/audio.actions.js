import AudioActionTypes from './audio.types';

export const toggleStop = () => ({
    type: AudioActionTypes.TOGGLE_STOP
});

export const toggleStart = () => ({
    type: AudioActionTypes.TOGGLE_START
});

export const togglePausePlayStop = () => ({
    type: AudioActionTypes.TOGGLE_PAUSE_PLAY_STOP
});

export const togglePausePlayStart = () => ({
    type: AudioActionTypes.TOGGLE_PAUSE_PLAY_START
});