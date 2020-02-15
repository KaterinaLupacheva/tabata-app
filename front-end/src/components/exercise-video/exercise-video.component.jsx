import React, { useContext, useEffect } from 'react';
import { VideoContext } from '../../contexts/video.context';
import {useSpring, animated} from 'react-spring';

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

    const props = useSpring({height: `${height}`, from: {height: '0%'}});

    return(
        <animated.video 
            style={props}
            className='exercise-video' 
            height={height} 
            muted
            loop
            playsInline
            ref={vidRef}
            key={link} 
        >
            <source src={`${link}`} type="video/mp4" />
        </animated.video>
)};

export default ExerciseVideo;