import React from 'react';
import {Link} from 'react-router-dom';
import CardsOverview from '../../components/cards-overview/cards-overview.component';

import './landing-page.styles.scss';

const LandingPage = () => (
    <div className='landing-page-container'>
        <div className='main-section'>
            <h1 className='main-title'>Tabata App</h1>
            <h4 className='main-subtitle'>Simple Way To Be Fit</h4>
            <Link to='/'>
                <button className='cta-button'>Get Started</button>
            </Link>
        </div>
        <div className='tabata-app-divider'>
            Tabata App by Ramonak:
        </div>
        <CardsOverview />
    </div>
);

export default LandingPage;

//add subscribe to updates https://vanido.io/
//stages how to start workout
//benefits
