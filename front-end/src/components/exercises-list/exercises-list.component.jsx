import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectExercisesForPreview, selectNumOfShowingEx, selectIndexOfFirstShowingEx } from '../../redux/exercises/exercises.selectors';
import { showNextExercises, showPrevExercises } from '../../redux/exercises/exercises.actions';
import { selectWorkoutExercises } from '../../redux/workout/workout.selectors';
import ArrowLeftIcon from '../../components/icons/arrow-left.component';
import ArrowRightIcon from '../../components/icons/arrow-right.component';

import './exercises-list.styles.scss';
import ExerciseButton from '../exercise-button/exercise-button.component';


const countExercisesToShow = (exercises, indexOfFirstEx, numOfShowingEx, workout) => {
    const exercisesToShow = exercises.slice(indexOfFirstEx, indexOfFirstEx + numOfShowingEx);
    const exercisesWithPressed = checkPressed(exercisesToShow, workout);
    let rows = [];
    while(exercisesWithPressed.length > 0) {
        rows.push(exercisesWithPressed.splice(0, 3));
    }
    return rows;
}

const checkPressed = (exercises, workout) => {
    for (let i=0; i<workout.length; i++) {
        exercises = exercises.map(el => el.name === workout[i].name ? {...el, isPressed: true} : el);
    }
    return exercises;
}

const ExercisesList = ({ exercises, indexOfFirstEx, numOfShowingEx, showNextExercises, showPrevExercises, workout }) => {
    const rows = countExercisesToShow(exercises, indexOfFirstEx, numOfShowingEx, workout);
   return (
       <div className='exercises-list-container'>
           <div 
                className={`${(indexOfFirstEx-numOfShowingEx) >= 0 ? 'visible' : ''} icon-container`}
                onClick={() => showPrevExercises()}
            >
                <ArrowLeftIcon />
           </div>
            <div className='exercises-list' >
                {
                    rows.map(row => (
                        <div className='row' key={rows.indexOf(row)}>
                    {
                        row.map(ex => (
                            <ExerciseButton key={ex.id} exercise={ex}/>
                        ))
                    }
                        </div>
                    ))
                }                     
            </div>
            <div 
                className={`${(indexOfFirstEx+numOfShowingEx) < exercises.length ? 'visible' : ''} icon-container`} 
                onClick={() => showNextExercises()}
            >
                <ArrowRightIcon />
            </div>
        </div>
   )
};

const mapStateToProps = createStructuredSelector({
    exercises: selectExercisesForPreview,
    numOfShowingEx: selectNumOfShowingEx,
    indexOfFirstEx: selectIndexOfFirstShowingEx,
    workout: selectWorkoutExercises
});

const mapDispatchToProps = dispatch => ({
    showNextExercises: () => dispatch(showNextExercises()),
    showPrevExercises: () => dispatch(showPrevExercises())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesList);