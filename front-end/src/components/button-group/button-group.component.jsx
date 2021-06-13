import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectedDuration } from '../../redux/duration/duration.selectors';
import { selectSelectedCircuit } from '../../redux/circuit/circuit.selectors';
import { selectSelectedMuscleGroup } from '../../redux/muscle-group/muscle-group.selectors';

import './button-group.styles.scss';
import OptionButton from '../../components/option-button/option-button.component';

const ButtonGroup = ({ options, handleOptionChange }) => {
  return (
    <div className="button-group">
      {options.map(option => (
        <OptionButton key={option.id} handleOptionChange={handleOptionChange} option={option} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedDuration: selectSelectedDuration,
  selectedCircuit: selectSelectedCircuit,
  selectSelectedMuscleGroup: selectSelectedMuscleGroup,
});

export default connect(mapStateToProps)(ButtonGroup);
