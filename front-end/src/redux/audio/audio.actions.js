import AudioActionTypes from './audio.types';

export const toggleStop = () => ({
    type: AudioActionTypes.TOGGLE_STOP
});

export const toggleStart = () => ({
    type: AudioActionTypes.TOGGLE_START
});