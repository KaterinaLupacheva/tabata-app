import React from 'react';
import {Link} from 'react-router-dom';

import './pay-button.styles.scss';

const PayButton = () => (
    <Link to='/checkout'>
        <button className='pay-button'>PAY NOW</button>
    </Link>
);

export default PayButton;