import React from 'react';
import { connect } from 'react-redux';
import DumbbellIcon from '../icons/dumbbell-icon.component';

import './exercise-button.styles.scss';
import { toggleButtonPressed } from '../../redux/exercises/exercises.actions';
import { toggleExercise } from '../../redux/workout/workout.actions';

const ExerciseButton = ({ exercise, toggleExercise, toggleButtonPressed }) => {
    const { name, isPressed } = exercise;
    return(
        <div 
            className={`${isPressed ? 'pressed' : ''} exercise-button`} 
            onClick={() => {toggleButtonPressed(exercise); toggleExercise(exercise)}} >
                <div className='exercise-name'>     
                    {name.toLowerCase()}
                    {exercise.isWithWeights ? 
                        <DumbbellIcon /> : 
                        ''}
                </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleExercise: exercise => dispatch(toggleExercise(exercise)), 
    toggleButtonPressed: exercise => dispatch(toggleButtonPressed(exercise))
});

export default connect(null, mapDispatchToProps)(ExerciseButton);