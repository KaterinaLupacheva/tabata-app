import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWorkoutExercises, selectIsImage, selectNextExerciseName, 
    selectNextExerciseLink } from '../../redux/workout/workout.selectors';

import './exercises-preview.styles.scss';

import ExerciseItem from '../exercise-item/exercise-item.component';
import ExerciseImage from '../exercise-image/exercise-image.component';
import NextExercise from '../next-exercise/next-exercise.component';
import ActiveExerciseName from '../active-exercise-name/active-exercise-name.component';

const ExercisesPreview = ({ exercises, isImage, nextExerciseName, nextExerciseLink }) => (    
    <div className='exercises-preview'>
        <div className='exercises-list'> 
            {
                exercises.map((exercise) => (
                    <ExerciseItem 
                        key={exercise.id} 
                        name={exercise.name} 
                        isActive={exercise.isActive} 
                    />
            ))}
        </div>
        <div className='image-or-next-container'>
            { isImage ? 
                (exercises.map((exercise) => (exercise.isActive === true ? (
                    <div className='image-or-next'>
                        <ExerciseImage key={exercise.id} link={exercise.link} />
                        <ActiveExerciseName />
                    </div>
                    ) : '')
                ))
            : (
                <div className='image-or-next'>
                    <NextExercise visible={true} exerciseName={nextExerciseName} />
                    <ExerciseImage link={nextExerciseLink} height={'80%'} />                   
                </div>
                )
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    exercises: selectWorkoutExercises,
    isImage: selectIsImage, 
    nextExerciseName: selectNextExerciseName,
    nextExerciseLink: selectNextExerciseLink
});

export default connect(mapStateToProps)(ExercisesPreview);