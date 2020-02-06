import React from 'react';
import image1 from '../../assets/dumbbell-filled-ramonak.png';
import { ReactComponent as Dumbbell } from '../../assets/dumbbell.svg';
import WithWeightsCheckboxContext from '../../contexts/with-weights-checkbox.context';
import './dumbbell-icon.styles.scss';

const DumbbellIcon = () => (
    <WithWeightsCheckboxContext.Consumer>
    {({ checked, toggleChecked }) => checked ? 
        <img src={image1} alt='dumbbell' className='dumbbell-icon' onClick={toggleChecked} /> :
        <Dumbbell className='dumbbell-empty' onClick={toggleChecked}/>
    }
    </WithWeightsCheckboxContext.Consumer>    
);

export default DumbbellIcon;