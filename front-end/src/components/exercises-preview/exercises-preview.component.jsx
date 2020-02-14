import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWorkoutExercises, selectIsImage, selectNextExerciseName, 
    selectNextExerciseLink } from '../../redux/workout/workout.selectors';

import './exercises-preview.styles.scss';

import ExerciseItem from '../exercise-item/exercise-item.component';
import NextExercise from '../next-exercise/next-exercise.component';
import ActiveExerciseName from '../active-exercise-name/active-exercise-name.component';
import ExerciseVideo from '../exercise-video/exercise-video.component';

const ExercisesPreview = ({ exercises, isImage, nextExerciseName, nextExerciseLink, showGetReady }) => (    
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
                <div>
                {
                    (exercises.map((exercise) => (exercise.isActive === true ? (
                        <div key={exercise.name} className='image-or-next'>                            
                            <ExerciseVideo link={exercise.link} height={'100%'} />
                            <ActiveExerciseName />
                        </div>
                        ) : '')
                    ))
                }
                {showGetReady ? <h1 className='get-ready'>{'Get Ready And Press Start!!!'}</h1> : ''}
            </div>
            : (
                <div className='image-or-next'>
                    <NextExercise visible={true} exerciseName={nextExerciseName} />
                    <ExerciseVideo link={nextExerciseLink} height={'80%'} />                
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