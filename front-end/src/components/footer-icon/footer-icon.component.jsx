import React from 'react';
import { IconContext } from 'react-icons';

import './footer-icon.styles.scss';

const FooterIcon = ({ id, link, icon }) => (
  <div className="footer-icon">
    <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
      <IconContext.Provider value={{ size: '2em' }}>{icon}</IconContext.Provider>
    </a>
  </div>
);

export default FooterIcon;
