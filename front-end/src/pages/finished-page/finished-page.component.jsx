import React from 'react';
import { withRouter } from 'react-router-dom';
import './finished-page.styles.scss';
import AbsoluteWrapper from '../../components/absolute-wrapper/absolute-wrapper.component';
import CustomButtom from '../../components/custom-button/custom-button.component';

const FinishedPage = ({ history }) => {
    
    const repeatWorkout = () => (
        history.push({
           pathname: '/workout'
        })
    );

    return (
        <AbsoluteWrapper>
            <div className='finished-page'>
                <h1 className='text'>GREAT WORK!</h1>
                <h3>Don't forget to cooldown and stretch!</h3>
                <div className='buttons'>
                    {/* <div className='save-workout'>
                        <CustomButtom onClick={() => console.log('click')}>Save Workout</CustomButtom>
                    <span>only for registered users</span>
                </div> */}
                <CustomButtom isActive={true} onClick={repeatWorkout}>Repeat Workout</CustomButtom>
                </div>
            </div>
        </AbsoluteWrapper>
        );
}

export default withRouter(FinishedPage);