import React from 'react';
import { Link } from 'react-router-dom';

import './teachers.css';

function Select() {
    return(
        <>
            <div className='app-Link'><Link to = "enter">Teachers</Link></div>
            <div className='app-Link'><Link to = "first">Dropdown</Link></div>
        </>
    );
}

export default Select;
