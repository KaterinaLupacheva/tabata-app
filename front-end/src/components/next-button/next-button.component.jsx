import React from 'react';
import './next-button.styles.scss';
import {Link} from 'react-router-dom';

const NextButton = ({ path }) => (
    <Link className='next-button-container' to={path}>
        <button className='next-button'>
            NEXT
        </button>
    </Link>
);

export default NextButton;