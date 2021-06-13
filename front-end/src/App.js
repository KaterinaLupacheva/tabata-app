import React from 'react';
import { Route, Switch, Redirect, withRouter, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

import LandingPage from './pages/landing-page/landing-page.component';
import StartPage from './pages/startpage/startpage.component';
import WorkoutPage from './pages/workout-page/workout-page.component';
import CreateWorkoutPage from './pages/create-workout-page/create-workout-page.component';
import ParametersPage from './pages/parameters-page/parameters-page.component';
import FinishedPage from './pages/finished-page/finished-page.component';
import CircuitsPage from './pages/circuits-page/circuits-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import useViewCounter from './useViewCounter.hook';

const App = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,-50%)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,-50%)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,-50%)' },
  });

  useViewCounter();

  return (
    <div className="container">
      {location.pathname !== '/about' ? <Header /> : null}

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/about" component={LandingPage} />
            <Route exact path="/create-workout" component={CreateWorkoutPage} />
            <Route exact path="/circuits" component={CircuitsPage} />
            <Route exact path="/finished" component={FinishedPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route path="/workout" component={WorkoutPage} />
            <Route exact path="/parameters" component={ParametersPage} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
