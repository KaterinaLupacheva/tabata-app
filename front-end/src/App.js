import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
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
import CheckoutPage  from './pages/checkout-page/checkout-page.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './components/header/header.component';
import WithWeightsCheckboxContext from './contexts/with-weights-checkbox.context';
import { VideoContextProvider } from './contexts/video.context';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggleChecked = () => {
        this.setState(state => ({
            checked: !state.checked
        }));
    };

    this.state = {
        checked: false,
        toggleChecked: this.toggleChecked
    };
  }

  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if(userAuth){
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //           setCurrentUser({
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           })
  //       });
  //     } else {
  //       setCurrentUser(userAuth);
  //     }
  //   })
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div className='container'>
        {
          this.props.location.pathname !== '/about' ? <Header /> : null
        }
        
        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route exact path='/about' component={LandingPage} />
          <Route exact path='/create-workout' component={CreateWorkoutPage} />
          <Route exact path='/circuits' component={CircuitsPage} />
          <Route exact path='/finished' component={FinishedPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
              exact 
              path='/signin' 
              render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />)} 
          />
          <WithWeightsCheckboxContext.Provider value={this.state}>
            <VideoContextProvider>
              <Route path='/workout' component={WorkoutPage} />
            </VideoContextProvider>
            <Route exact path='/parameters' component={ParametersPage} />
          </WithWeightsCheckboxContext.Provider>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
