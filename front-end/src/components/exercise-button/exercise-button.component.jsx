import React from 'react';
import { connect } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

import './exercise-button.styles.scss';
import { toggleButtonPressed } from '../../redux/exercises/exercises.actions';
import { toggleExercise } from '../../redux/workout/workout.actions';

const ExerciseButton = ({ exercise, toggleExercise, toggleButtonPressed }) => {
    const { name, isPressed } = exercise;
    return(
        <div 
            className={`${isPressed ? 'pressed' : ''} exercise-button`} 
            onClick={() => {toggleButtonPressed(exercise); toggleExercise(exercise)}} >
                <EllipsisText 
                    className='exercise-name' 
                    text={name.toLowerCase()} 
                    length={'20'}
                    tooltip={name.toLowerCase()} 
                />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleExercise: exercise => dispatch(toggleExercise(exercise)), 
    toggleButtonPressed: exercise => dispatch(toggleButtonPressed(exercise))
});

export default connect(null, mapDispatchToProps)(ExerciseButton);