import React from 'react';
import { withRouter } from 'react-router-dom';
import './finished-page.styles.scss';

import CustomButtom from '../../components/custom-button/custom-button.component';

const FinishedPage = ({ history }) => {
    
    const repeatWorkout = () => (
        history.push({
           pathname: '/workout'
        })
    );

    return (
        <div className='finished-page'>
            <h1 className='text'>GREAT WORK!</h1>
            <div className='buttons'>
                {/* <div className='save-workout'>
                    <CustomButtom onClick={() => console.log('click')}>Save Workout</CustomButtom>
                <span>only for registered users</span>
            </div> */}
            <CustomButtom isActive={true} onClick={repeatWorkout}>Repeat Workout</CustomButtom>
            </div>
        </div>
        );
}

export default withRouter(FinishedPage);