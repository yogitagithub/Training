import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import './Admin.css';

function User() {

    const [cut, setCut] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
          .then(resp =>
              resp.json()
        )
        .then(dt => {
            setCut(dt)
        })
    }, [])

    return(
        <div>
            <table>
                <thead>

                    <tr>
                        <th>Username</th>
                        <th>City</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>

                    {cut.map(put => <tr>
                        <td>{put.username}</td>
                        <td>{put.city}</td>
                        <td>{put.age}</td>
                    </tr>)}  
                      
                </tbody>
            </table>
        </div>
    );
}

export default User;