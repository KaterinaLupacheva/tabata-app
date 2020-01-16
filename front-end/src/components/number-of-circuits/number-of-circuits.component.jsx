import React from 'react';
import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentCircuit } from '../../redux/circuit/circuit.selectors';

import './number-of-circuits.styles.scss';

const NumberOfCircuits = ({ currentCircuit }) => (
    <div className='circuit'>
        <span className='circle'>{currentCircuit}</span> 
    </div>
)
    

const mapStateToProps = createStructuredSelector({
    currentCircuit: selectCurrentCircuit
});

export default connect(mapStateToProps)(NumberOfCircuits);