import React, { useState } from 'react';

import Header from './header';
import Button from '../utilities/Button';
import createNotification from '../apis/createNotification';

import './onlineCheckIn.css'

const OnlineCheckIn = () => {
    const [acceptAgreement, setAcceptAgreement] = useState(false);

    const changeAgreement = () => {
        setAcceptAgreement(!acceptAgreement);
    }

    return (
        <div>
            <Header />
            <div className='online-check-in-page'>
                <div>
                    <h1>Web Check-in</h1>
                    <p>
                        Web check-in for passengers is available 48 hrs to 60 mins before domestic flight departure, and 24 hrs to 75 mins before international flight departure.
                        Airport Check-in at counter is available 60 mins before domestic flight departure, and 75 mins before international flight departure.
                    </p>
                </div>
                <br />
                <div>
                    <input type='text' placeholder='PNR/ Booking reference' className='input-text' />
                    <br />
                    <br />
                    <input type='text' placeholder='Email / last name' className='input-text' />
                    <br />
                    <br />
                </div>
                <input type='checkbox' value={acceptAgreement} onChange={changeAgreement} /><span>* Agree to the terms and Conditions</span>
                {/* <button disabled={!acceptAgreement}>Confirm Booking</button> */}
                <Button text='Confirm Check-in' onClickMethod={createNotification} disabled={!acceptAgreement} />
                <div>
                    <p>More information</p>
                    <p>You're able to check in starting 24 hours before your scheduled departure.</p>
                    <p>Minimum time requirements for check-in, checking bags and boarding vary based on your departure airport and destination. Learn more about these requirements.</p>
                    <p>Need help? Learn more about our check-in process.</p>
                </div>
            </div>
        </div>
    )
}

export default OnlineCheckIn;