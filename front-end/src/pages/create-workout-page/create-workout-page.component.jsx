import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchExercisesStartAsync } from '../../redux/exercises/exercises.actions';
import { selectIsExercisesFetching } from '../../redux/exercises/exercises.selectors';
import { selectMuscleGroupOptions, selectSelectedMuscleGroup } from '../../redux/muscle-group/muscle-group.selectors';
import { fetchMuscleGroups, changePressedMuscleGroup, 
    findPressedMuscleGroup} from '../../redux/muscle-group/muscle-group.actions';
import { selectWorkoutExercises } from '../../redux/workout/workout.selectors';
import './create-workout-page.styles.scss';
import ExercisesList from '../../components/exercises-list/exercises-list.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ButtonGroup from '../../components/button-group/button-group.component';
import ArrowButton from '../../components/arrow-button/arrow-button.component';

const ExercisesListWithSpinner = WithSpinner(ExercisesList);

class CreateWorkoutPage extends React.Component {
    componentDidMount() {
        const { fetchExercisesStartAsync, fetchMuscleGroups, selectedMuscleGroup } = this.props;
        fetchExercisesStartAsync(selectedMuscleGroup);
        fetchMuscleGroups();    
    }

    handleButtonClick = () => {
        this.props.history.push({
            pathname: '/circuits',
        });
    }

    handleOptionChange = (option) => {
        this.props.changePressedMuscleGroup(option.value);
        this.props.findPressedMuscleGroup(this.props.muscleGroupOptions);
        const pressed = this.props.muscleGroupOptions.find(option => option.isPressed === true).name
        this.props.fetchExercisesStartAsync(pressed); 
    }

    render() {
        const { isExercisesFetching, muscleGroupOptions, workoutExercises } = this.props;
        return (
            <div className='create-workout-page'>
                <div className='chose-exercises'>Chose exercises for workout</div>
                <div className='button-group-container'>
                    <ButtonGroup 
                        options={muscleGroupOptions} 
                        handleOptionChange={option => this.handleOptionChange(option)}
                    />
                </div>
                <div className='exercises-container'>
                    <ExercisesListWithSpinner isLoading={isExercisesFetching} {...this.props}/> 
                </div>
                {workoutExercises.length > 0 ? 
                    <ArrowButton path={'/circuits'}/> :
                    ''
                }
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    isExercisesFetching: selectIsExercisesFetching,
    muscleGroupOptions: selectMuscleGroupOptions,
    selectedMuscleGroup: selectSelectedMuscleGroup,
    workoutExercises: selectWorkoutExercises
});

const mapDispatchToProps = dispatch => ({
    fetchExercisesStartAsync: (muscleGroup) => dispatch(fetchExercisesStartAsync(muscleGroup)),
    fetchMuscleGroups: () => dispatch(fetchMuscleGroups()),
    changePressedMuscleGroup: pressedOption => dispatch(changePressedMuscleGroup(pressedOption)),
    findPressedMuscleGroup: options => dispatch(findPressedMuscleGroup(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutPage);