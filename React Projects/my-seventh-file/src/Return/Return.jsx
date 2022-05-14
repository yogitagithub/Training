import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import './Return.css';

function Pencil() {
    const[box, setBox] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/useful')
           .then(resp =>
              resp.json()
           )
           .then(dt => {
               setBox(dt.data)
           })
    }, [])

    return(
        <div>
            <table>
                <thead>

                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {box.map(flip => <tr>
                        <td>{flip.email}</td>
                        <td>{flip.first_name}</td>
                        <td>{flip.last_name}</td>
                        <td><input type="button" value="SHOW DATA"></input></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Pencil;