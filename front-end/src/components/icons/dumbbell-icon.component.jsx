import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsWithWeights } from '../../redux/workout/workout.selectors';
import { toggleWeights } from '../../redux/workout/workout.actions';
import { FaDumbbell } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './dumbbell-icon.styles.scss';

const DumbbellIcon = ({ size, isClicked, isWithWeights, toggleWeights }) => {
  return isClicked ? (
    <IconContext.Provider value={{ color: '#E0314B', size: `${size}` }}>
      <FaDumbbell />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider
      value={{
        color: `${isWithWeights ? `#E0314B` : `white`}`,
        size: `${size}`,
        className: 'dumbbell-icon',
      }}
    >
      <FaDumbbell onClick={() => toggleWeights()} />
    </IconContext.Provider>
  );
};

const mapStateToProps = createStructuredSelector({
  isWithWeights: selectIsWithWeights,
});

const mapDispatchToProps = dispatch => ({
  toggleWeights: () => dispatch(toggleWeights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DumbbellIcon);
