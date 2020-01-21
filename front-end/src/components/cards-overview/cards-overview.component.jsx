import React from 'react';
import { DATA_FOR_CARDS } from '../../pages/landing-page/data.jsx';
import Card from '../card/card.component';
import './cards-overview.styles.scss';

const CardsOverview = () => (
    <div className='cards-container'>
        {
            DATA_FOR_CARDS.map(item => (
                <Card icon={item.icon} title={item.title} description={item.description} />
            ))
        }
    </div>
);

export default CardsOverview;