import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function String() {
    return(
        <>
            <div className='app-Link'><Link to = "cap">Sign Up</Link></div>
            <div className='app-Link'><Link to = "tap">Sign In</Link></div>
        </>
    );
}

export default String;
