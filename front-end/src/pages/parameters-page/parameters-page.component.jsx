import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchMuscleGroups, changePressedMuscleGroup, findPressedMuscleGroup} from '../../redux/muscle-group/muscle-group.actions';
import { selectMuscleGroupOptions } from '../../redux/muscle-group/muscle-group.selectors';
import { selectDurationOptions, selectSelectedDuration } from '../../redux/duration/duration.selectors';
import { fetchDurations, changePressedDuration, findPressedDuration } from '../../redux/duration/duration.actions';
import { selectCircuitOptions } from '../../redux/circuit/circuit.selectors';
import { fetchCircuits, changePressedCircuit, findPressedCircuit } from '../../redux/circuit/circuit.actions';

import './parameters-page.styles.scss';
import ButtonGroup from '../../components/button-group/button-group.component';
import NextButton from '../../components/next-button/next-button.component';
import CheckboxWithIcon from '../../components/checkbox-with-icon/checkbox-with-icon.component';

class ParametersPage extends React.Component {
    componentDidMount() {
        const { fetchDurations, fetchCircuits, fetchMuscleGroups } = this.props;
        fetchDurations();
        fetchCircuits();
        fetchMuscleGroups();
    }
    
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();       
        this.props.history.push({
            pathname: '/workout',
            numOfExercises: (parseInt(this.state.selectedDuration.charAt(0)) * 2),
            numOfCircuits: (parseInt(this.state.selectedCircuit.charAt(0))), 
            muscleGroup: this.state.selectedMuscleGroup
        });    
      };

    render() {
        const { durationOptions, circuitOptions, muscleGroupOptions, changePressedDuration, findPressedDuration,
            changePressedCircuit, findPressedCircuit, changePressedMuscleGroup, findPressedMuscleGroup } = this.props;
        return (
            <div className='parameters'>
                <div className='button-groups'>
                    <h2 className='title'>Circuit's duration</h2>
                    <ButtonGroup 
                        options={durationOptions} 
                        handleOptionChange={option => {
                            changePressedDuration(option.value);
                            findPressedDuration(durationOptions);
                        }}
                    />
                    <h2 className='title'>Number of circuits</h2>
                    <ButtonGroup 
                        options={circuitOptions} 
                        handleOptionChange={option => {
                            changePressedCircuit(option.value);
                            findPressedCircuit(circuitOptions);
                        }}
                    />
                    <h2 className='title'>Focus muscle group</h2>
                    <ButtonGroup 
                        options={muscleGroupOptions} 
                        handleOptionChange={option => {
                            changePressedMuscleGroup(option.value);
                            findPressedMuscleGroup(muscleGroupOptions);
                        }}
                    />
                    <CheckboxWithIcon />
                </div>
                <NextButton path='/workout'/>
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    durationOptions: selectDurationOptions,
    circuitOptions: selectCircuitOptions,
    muscleGroupOptions: selectMuscleGroupOptions,
    selectedDuration: selectSelectedDuration
});

const mapDispatchToProps = dispatch => ({
    fetchDurations: () => dispatch(fetchDurations()),
    fetchCircuits: () => dispatch(fetchCircuits()),
    fetchMuscleGroups: () => dispatch(fetchMuscleGroups()),
    changePressedDuration: pressedOption => dispatch(changePressedDuration(pressedOption)),
    findPressedDuration: options => dispatch(findPressedDuration(options)),
    changePressedCircuit: pressedOption => dispatch(changePressedCircuit(pressedOption)),
    findPressedCircuit: options => dispatch(findPressedCircuit(options)),
    changePressedMuscleGroup: pressedOption => dispatch(changePressedMuscleGroup(pressedOption)),
    findPressedMuscleGroup: options => dispatch(findPressedMuscleGroup(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(ParametersPage);