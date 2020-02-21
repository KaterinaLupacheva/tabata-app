import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../assets/logo.png";

// import { auth } from '../../firebase/firebase.utils';

import "./header.styles.scss";

const Header = () => {
  const isInWebAppiOS = window.navigator.standalone === true;
  const isInWebAppChrome = window.matchMedia("(display-mode: standalone)")
    .matches;
  let href = "https://ramonak.io/";
  if (isInWebAppiOS || isInWebAppChrome) {
    href = "/";
  }
  return (
    <div className="header">
      <a className="logo-container" href={href}>
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/about">
          ABOUT
        </Link>
        {/* {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )} */}
      </div>
    </div>
  );
};

const matStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(matStateToProps)(Header);
