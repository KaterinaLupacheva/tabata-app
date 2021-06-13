import React from 'react';
import { Link } from 'react-router-dom';

import './cta-button.styles.scss';

const CTAButton = () => (
  <Link to="/">
    <button className="cta-button">Get Started</button>
  </Link>
);

export default CTAButton;
