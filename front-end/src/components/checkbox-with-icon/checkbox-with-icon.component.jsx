import React from 'react';
import Checkbox from '../checkbox/checkbox.component';
import DumbbellIcon from '../icons/dumbbell-icon.component';
import WithWeightsCheckboxContext from '../../contexts/with-weights-checkbox.context';

import './checkbox-with-icon.styles.scss';

const CheckboxWithIcon = () => (
    <WithWeightsCheckboxContext.Consumer>
        {({ checked, toggleChecked }) => (
            <div className='checkbox-with-icon'>
                <Checkbox checked={checked} toggleChecked={toggleChecked} />
                <DumbbellIcon />
            </div>
            )}
        }
    </WithWeightsCheckboxContext.Consumer>
);

export default CheckboxWithIcon;