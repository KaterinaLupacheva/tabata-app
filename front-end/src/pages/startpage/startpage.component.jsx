import React from 'react';
import { connect } from 'react-redux';
import './startpage.styles.scss';

import StartMenu from '../../components/start-menu/start-menu.component';
import PayButton from '../../components/pay-button/pay-button.component';
import { RESET_STATE } from '../../redux/reset.type';

class StartPage extends React.Component {

    componentDidMount() {
        this.props.reset();
    }

    render() {
        return (
            <div className='startpage'>
                <StartMenu />
                <PayButton />   
            </div>
    )}
}     

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(RESET_STATE)
})

export default connect(null, mapDispatchToProps)(StartPage);