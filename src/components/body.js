import React from 'react';

import FlightDeails from './flight-details';
import DepartureDetails from './departure-details';
import CheckIn from './check-in';

const Body = () => {
    return (
        <div className='body' style={{padding: '10px'}}>
            <FlightDeails />
            <DepartureDetails />
            <CheckIn />
        </div>
    )
}

export default Body;