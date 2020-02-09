import React from 'react';
import './absolute-wrapper.styles.scss';

const AbsoluteWrapper = ({ children }) => (
    <div className='absolute-wrapper'>
        {children}
    </div>
);

export default AbsoluteWrapper;