import React, {useState} from 'react';

import Header from './header';
import Button from '../utilities/Button';

const OnlineCheckIn = () => {
    const [acceptAgreement, setAcceptAgreement] = useState(false);

    const changeAgreement = () => {
        setAcceptAgreement(!acceptAgreement);
    }
    return (
        <>
            <Header />
            <input type='checkbox' value={acceptAgreement} onChange={changeAgreement}/>
            {/* <button disabled={!acceptAgreement}>Confirm Booking</button> */}
            <Button text='Confirm Booking' onClickMethod={()=>{console.log('hello')}} disabled={!acceptAgreement}/>
        </>
    )
}

export default OnlineCheckIn;