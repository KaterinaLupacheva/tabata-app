import React, { useState } from 'react';
import image1 from '../../assets/dumbbell-filled-ramonak.png';
import { ReactComponent as Dumbbell } from '../../assets/dumbbell.svg';
import './dumbbell-icon.styles.scss';

const DumbbellIcon = () => {
    const[clicked, toggleClicked] = useState(false);
    return(
        <>
        {clicked ? 
            <img src={image1} alt='dumbbell' className='dumbbell-icon' onClick={() => toggleClicked(!clicked)} /> :
            <Dumbbell className='dumbbell-empty' onClick={() => toggleClicked(!clicked)}/>
        }
        </>    
)};

export default DumbbellIcon;