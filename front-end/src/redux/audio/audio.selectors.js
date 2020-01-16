import { createSelector } from 'reselect';

const selectAudio = state => state.audio;

export const selectAudioStopStatus = createSelector(
    [selectAudio],
    audio => audio.audioStatusStop
);

export const selectAudioStartStatus = createSelector(
    [selectAudio],
    audio => audio.audioStatusStart
);