import React from 'react';
import { useNavigate } from 'react-router-dom';
import './check-in.css'
import Button from '../utilities/Button';

const CheckIn = () => {
    const navigate = useNavigate()

    const onlineCheckIn = () => {
        navigate('/checkIn')
    }
    return (
        <Button text='ONLINE CHECK-IN' onClickMethod={onlineCheckIn}/>
    )
}

export default CheckIn;