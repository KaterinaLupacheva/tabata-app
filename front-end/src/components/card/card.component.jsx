import React from 'react';
// import { FaRandom } from "react-icons/fa";
import { IconContext } from "react-icons";

import './card.styles.scss';

const Card = ({ icon, title, description }) => (
  <div className='card-container'>
    <div className='card-icon'>
      <IconContext.Provider value={{ color: '#E0314B', size: "7em" }}>
        {/* <icon /> */}
        {icon}
      </IconContext.Provider>
    </div>
    <div className='card-title'>
      {title}
    </div>
    <div className='card-description'>
      {description}
    </div>
  </div>
);

export default Card;