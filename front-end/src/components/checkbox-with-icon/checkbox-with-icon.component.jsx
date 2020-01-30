import React from 'react';
import Checkbox from '../checkbox/checkbox.component';
import DumbbellIcon from '../icons/dumbbell-icon.component';

import './checkbox-with-icon.styles.scss';

const CheckboxWithIcon = () => (
    <div className='checkbox-with-icon'>
        <Checkbox />
        <DumbbellIcon />
    </div>
);

export default CheckboxWithIcon;