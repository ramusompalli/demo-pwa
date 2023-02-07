import React from 'react';
import './Button.css';

const Button = ({ text, onClickMethod, disabled = false }) => {
    return (
        <div className='check-in'>
            <button className='check-in-button' onClick={onClickMethod} disabled={disabled} style={{opacity: disabled ? 0.3 : 1}}>{text}</button>
        </div>
    )
}

export default Button;