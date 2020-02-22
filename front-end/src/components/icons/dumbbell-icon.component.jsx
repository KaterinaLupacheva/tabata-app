import React, { useContext } from 'react';
import image1 from '../../assets/dumbbell-filled-ramonak.png';
import { ReactComponent as Dumbbell } from '../../assets/dumbbell.svg';
import { WithWeightsContext } from '../../contexts/with-weights.context';

import './dumbbell-icon.styles.scss';

const DumbbellIcon = ({ size, isClicked }) => {
  const state = useContext(WithWeightsContext);
  return isClicked ? (
    <img src={image1} alt="dumbbell" style={{ width: `${size}` }} className="dumbbell-icon" />
  ) : state.checked ? (
    <img
      src={image1}
      alt="dumbbell"
      style={{ width: `${size}` }}
      className="dumbbell-icon"
      onClick={() => state.toggleChecked(!state.checked)}
    />
  ) : (
    <Dumbbell
      style={{ width: `${size}` }}
      className="dumbbell-empty"
      onClick={() => state.toggleChecked(!state.checked)}
    />
  );
};

export default DumbbellIcon;
