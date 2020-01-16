import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWorkoutExercises, selectIsImage, selectNextExerciseName } from '../../redux/workout/workout.selectors';

import './exercises-preview.styles.scss';

import ExerciseItem from '../exercise-item/exercise-item.component';
import ExerciseImage from '../exercise-image/exercise-image.component';
import NextExercise from '../next-exercise/next-exercise.component';

const ExercisesPreview = ({ exercises, isImage, nextExerciseName }) => (    
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
        <div className='image-or-next'>
            { isImage ? 
                (exercises.map((exercise) => (exercise.isActive === true ? (
                    <ExerciseImage key={exercise.id} link={exercise.link} />
                 ) : '')
                ))
            : <NextExercise visible={true} exerciseName={nextExerciseName} />
        }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    exercises: selectWorkoutExercises,
    isImage: selectIsImage, 
    nextExerciseName: selectNextExerciseName
});

export default connect(mapStateToProps)(ExercisesPreview);