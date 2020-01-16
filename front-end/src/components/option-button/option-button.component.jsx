import React from 'react';

import './option-button.styles.scss';

const OptionButton = ({ option, handleOptionChange }) => {
    return (
        <div 
            className={`${option.isPressed ? 'pressed' : ''} option-button`} 
            onClick={() => handleOptionChange(option)} 
        > 
                <div className='option'>{option.name.toUpperCase()}</div>
        </div>
    )
};

export default OptionButton;