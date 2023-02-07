import React from 'react';
import './departure-details.css';

const DepartureDetails = () => {
    return (
        <div className='departure-details'>
            <div className='flight-time-details'>
                <div>
                    <p>Departure Time</p>
                    <p className='gate-details'>14:30 IST</p>
                </div>
                <div>
                    <p>Departure Gate</p>
                    <p className='gate-details'>D3</p>
                </div>
                <div>
                    <p>Terminal</p>
                    <p className='gate-details'>5</p>
                </div>
            </div>
            <div className='checkin-due-time'>
                <strong>ON TIME</strong>
                <div className='time-remaining'><span className='time'>8H 30M</span><span> TO CHECK-IN</span></div>
                <p className='info-title'>&#40;Minimum Check-in Time: 3 Hours Before Departure Time&#41;</p>
            </div>
        </div>
    )
}

export default DepartureDetails;