import React, { useContext, useEffect } from 'react';
import { VideoContext } from '../../contexts/video.context';

import './exercise-video.styles.scss';

const ExerciseVideo = ({ link, height }) => {

    const vidContext = useContext(VideoContext);

    const vidRef = React.createRef();

    useEffect(() => {
        if(vidContext.state.isPaused === true) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    });

    return(
        <video 
            className='exercise-video' 
            height={height} 
            muted 
            autoPlay 
            loop
            playsInline
            ref={vidRef} 
        >
            <source src={`${link}`} type="video/mp4" />
        </video>
)};

export default ExerciseVideo;