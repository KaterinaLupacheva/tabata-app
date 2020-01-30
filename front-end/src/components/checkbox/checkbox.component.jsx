import React, { useState } from 'react';

import './checkbox.styles.scss';

const Checkbox = ({ checked, toggleChecked }) => (
    <span className={`${checked ? 'checked' : ''} checkbox`}  onClick={toggleChecked}>
    </span>
);

export default Checkbox;