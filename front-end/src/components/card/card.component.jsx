import React from 'react';
import { IconContext } from "react-icons";
import DescriptionItem from '../description-item/description-item.component';

import './card.styles.scss';

const Card = ({ icon, title, description }) => (
  <div className='card-container'>
    <div className='card-icon'>
      <IconContext.Provider value={{ color: '#E0314B', size: "7em" }}>
        {icon}
      </IconContext.Provider>
    </div>
    <div className='card-title'>
      {title}
    </div>
    <div className='card-description'>
      {description.map(item => (
        <DescriptionItem item={item} />
      ))}
    </div>
  </div>
);

export default Card;