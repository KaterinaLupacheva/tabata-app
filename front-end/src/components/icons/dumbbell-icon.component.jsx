import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsWithWeights } from '../../redux/workout/workout.selectors';
import { toggleWeights } from '../../redux/workout/workout.actions';
import image1 from '../../assets/dumbbell-filled-ramonak.png';
import { ReactComponent as Dumbbell } from '../../assets/dumbbell.svg';

import './dumbbell-icon.styles.scss';

const DumbbellIcon = ({ size, isClicked, isWithWeights, toggleWeights }) => {
  return isClicked ? (
    <img src={image1} alt="dumbbell" style={{ width: `${size}` }} className="dumbbell-icon" />
  ) : isWithWeights ? (
    <img
      src={image1}
      alt="dumbbell"
      style={{ width: `${size}` }}
      className="dumbbell-icon"
      onClick={() => toggleWeights()}
    />
  ) : (
    <Dumbbell
      style={{ width: `${size}` }}
      className="dumbbell-empty"
      onClick={() => toggleWeights()}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isWithWeights: selectIsWithWeights,
});

const mapDispatchToProps = dispatch => ({
  toggleWeights: () => dispatch(toggleWeights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DumbbellIcon);
