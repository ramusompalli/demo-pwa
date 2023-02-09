import React from 'react';

import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div>
                {/* <img src="menu_FILL0_wght400_GRAD0_opsz48.svg" style={{backgroundColor: 'white'}} alt='menu'/> */}
            </div>
            <div className='logo'>
                <img src="../LTIMindtree192.jpg" className='img' alt="united airelines" />
                <strong className='title' >UNITED</strong>
            </div>
            <div className='avatar'>G</div>
        </header>
    );
}

export default Header;