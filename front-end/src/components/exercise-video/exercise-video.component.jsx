import React from 'react';

import './exercise-video.styles.scss';

const ExerciseVideo = ({ link, height }) => (
    <video 
        className='exercise-video' 
        height={height} 
        preload="true" 
        muted 
        autoPlay 
        loop 
        src={`${link}`} 
        type="video/mp4">
    </video>
);

export default ExerciseVideo;