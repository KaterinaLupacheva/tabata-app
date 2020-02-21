import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";

import "./arrow-button.styles.scss";

const ArrowButton = ({ path }) => (
  <div className="button-container">
    <Link to={path}>
      <img src={arrow} alt="arrow-button" />
    </Link>
  </div>
);

export default ArrowButton;
