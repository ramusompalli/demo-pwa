import React from 'react';

import './header.css';

const Header = () => {
    return(
        <header className='header'>
            <div>
                <img src="menu_FILL0_wght400_GRAD0_opsz48.svg" style={{backgroundColor: 'white'}}/>
            </div>
            <div>
                <div>
                    <img src="../United-Airlines-Emblem.png" className='img' alt="united airelines"/>
                    <strong className='title' >UNITED</strong>
                </div>
            </div>
            <div>
                <p className='avatar'>G</p>
            </div>
        </header>
    );
}

export default Header;