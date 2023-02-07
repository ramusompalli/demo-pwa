import React from 'react';

import './flight-details.css';
const FlightDeails = () => {
    return (
        <div className='flight-details'>
            <div>
                UA 2432
            </div>
            <div className='flight-from-to-end'>
                <p>Chicago&#40;ORD&#41;</p>
                <img src="./flight.png" style={{ height: '20px', width: '30px',marginTop: '15px' }} alt="flight" />
                <p>Paris&#40;ORD&#41;</p>
            </div>
            <div>
                <p>Friday,Dec 02, 2022</p>
            </div>
        </div>
    );
}

export default FlightDeails;