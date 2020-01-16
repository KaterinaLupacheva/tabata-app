import React from 'react';

import './exercise-image.styles.scss';

const ExerciseImage = ({id, link} ) => (
    <div className='exercise-image'>
        <img src={`${link}`} alt='image' />
    </div>
)

export default ExerciseImage;