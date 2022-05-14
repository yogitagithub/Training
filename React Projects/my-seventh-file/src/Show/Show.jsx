import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import './Show.css';

function Pen() {
    const[toy, setToy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
           .then(resp =>
              resp.json()
           )
           .then(dt => {
               setToy(dt)
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
                    {toy.map(flop => <tr>
                        <td>{flop.username}</td>
                        <td>{flop.city}</td>
                        <td>{flop.age}</td>
                      </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Pen;