import React from 'react';
import './next-button.styles.scss';
import { Link } from 'react-router-dom';

const NextButton = ({ path }) => (
  <div className="next-button-container">
    <Link to={path}>
      <button className="next-button">NEXT</button>
    </Link>
  </div>
);

export default NextButton;
