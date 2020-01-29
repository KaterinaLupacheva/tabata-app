import React from 'react';
import { IconContext } from "react-icons";
import { FaDumbbell } from "react-icons/fa";
import './dumbbell-icon.styles.scss';

const DumbbellIcon = () => (
    <IconContext.Provider value={{ size: '20px', className: "dumbbell-icon" }}>
        <FaDumbbell />
    </IconContext.Provider>
);

export default DumbbellIcon;