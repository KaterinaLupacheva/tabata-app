import React from 'react';

import './exercise-video.styles.scss';

const ExerciseVideo = ({ link, height }) => (
    <video 
        className='exercise-video' 
        height={height} 
        muted 
        autoPlay 
        loop 
    >
        <source src={`${link}`} type="video/mp4" />
    </video>
);

export default ExerciseVideo;