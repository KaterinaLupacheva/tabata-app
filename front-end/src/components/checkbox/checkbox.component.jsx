import React, { useState } from 'react';

import './checkbox.styles.scss';

const Checkbox = () => {
    const[checked, toggleChecked] = useState(false);
    
    return(
    <span onClick={() => toggleChecked(!checked)}>
        <input type="checkbox" checked={checked}/>
        <span></span>
    </span>
)};

export default Checkbox;