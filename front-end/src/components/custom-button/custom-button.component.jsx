import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isActive, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${isActive ? '' : 'disabled'} custom-button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;