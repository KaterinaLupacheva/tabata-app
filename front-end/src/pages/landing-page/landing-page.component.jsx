import React from 'react';

import CTAButton from '../../components/cta-button/cta-button.component';
import CardsOverview from '../../components/cards-overview/cards-overview.component';
import AboutTabata from '../../components/about-tabata/about-tabata.component';
import Footer from '../../components/footer/footer.component';

import './landing-page.styles.scss';

const LandingPage = () => (
    <div className='landing-page-container'>
        <div className='main-section'>
            <h1 className='main-title'>Tabata App</h1>
            <h4 className='main-subtitle'>Simple Way To Be Fit</h4>
            <CTAButton />
        </div>
        <AboutTabata />
        <div className='tabata-app-divider'>
            Tabata App by Ramonak:
        </div>
        <CardsOverview />
        <Footer />
    </div>
);

export default LandingPage;

//add subscribe to updates https://vanido.io/

