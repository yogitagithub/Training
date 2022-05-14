import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Show() {
    return(
        <>
            <div className='app-Link'><Link to = "digit">Home</Link></div>
            <div className='app-Link'><Link to = "value">Admin</Link></div>
        </>
    );
}

export default Show;
