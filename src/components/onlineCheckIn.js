import React, {useState} from 'react';

import Header from './header';
import Button from '../utilities/Button';
import createNotification from '../apis/createNotification';

const OnlineCheckIn = () => {
    const [acceptAgreement, setAcceptAgreement] = useState(false);

    const changeAgreement = () => {
        setAcceptAgreement(!acceptAgreement);
    }

    return (
        <>
            <Header />
            <input type='checkbox' value={acceptAgreement} onChange={changeAgreement}/><span>* Agree to te term and Conditions</span>
            {/* <button disabled={!acceptAgreement}>Confirm Booking</button> */}
            <Button text='Confirm Booking' onClickMethod={createNotification} disabled={!acceptAgreement}/>
        </>
    )
}

export default OnlineCheckIn;