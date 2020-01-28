import React from 'react';

const ExerciseVideo = ({ link }) => (
    <video width="250" autoPlay loop src={`${link}`} type="video/mp4">
    </video>
);

export default ExerciseVideo;