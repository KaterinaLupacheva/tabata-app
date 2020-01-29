import React from 'react';
import { IconContext } from "react-icons";
import { FaDumbbell } from "react-icons/fa";
import './dumbbell-icon.styles.scss';

const DumbbellIcon = () => (
    <IconContext.Provider value={{ className: "dumbbell-icon" }}>
        <FaDumbbell />
    </IconContext.Provider>
);

export default DumbbellIcon;