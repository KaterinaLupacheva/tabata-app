import React from 'react';
import Sound from 'react-sound';

const Audio = ({ audioFile, status, onFinishedPlaying }) => (
    <div className='play-sound'>
        <Sound 
            url={audioFile}
            playStatus={status}
            onFinishedPlaying={onFinishedPlaying}
            autoLoad={true}
        />
    </div>
)

export default Audio;
