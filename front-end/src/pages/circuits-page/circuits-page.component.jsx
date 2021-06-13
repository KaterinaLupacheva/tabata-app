import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  fetchCircuits,
  changePressedCircuit,
  findPressedCircuit,
} from '../../redux/circuit/circuit.actions';
import { selectCircuitOptions } from '../../redux/circuit/circuit.selectors';
import './circuits-page.styles.scss';
import AbsoluteWrapper from '../../components/absolute-wrapper/absolute-wrapper.component';
import ButtonGroup from '../../components/button-group/button-group.component';
import NextButton from '../../components/next-button/next-button.component';

class CircuitsPage extends React.Component {
  componentDidMount() {
    const { fetchCircuits } = this.props;
    fetchCircuits();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <div className="circuits-page">
          <h2 className="title">Chose circuits</h2>
          <ButtonGroup
            options={this.props.options}
            handleOptionChange={option => {
              this.props.changePressedCircuit(option.value);
              this.props.findPressedCircuit(this.props.options);
            }}
          />
          <NextButton path={'/workout'} />
        </div>
      </AbsoluteWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  options: selectCircuitOptions,
});

const mapDispatchToProps = dispatch => ({
  fetchCircuits: () => dispatch(fetchCircuits()),
  changePressedCircuit: pressedOption => dispatch(changePressedCircuit(pressedOption)),
  findPressedCircuit: options => dispatch(findPressedCircuit(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CircuitsPage);
