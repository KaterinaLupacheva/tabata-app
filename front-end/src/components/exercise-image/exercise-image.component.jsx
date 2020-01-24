import React from 'react';

import './exercise-image.styles.scss';

const ExerciseImage = ({ link }) => (
    <div className='exercise-image'>
        <img src={`${link}`} alt='execise' />
    </div>
)

export default ExerciseImage;