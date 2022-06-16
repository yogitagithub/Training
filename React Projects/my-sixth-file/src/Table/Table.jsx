import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import './Table.css';

function Complete() {

    const[house, setHouse] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:3001/data')
               .then(resp =>
                  resp.json()
               )
               .then(dt => {
                   setHouse(dt)
               })
        }, [])
    
return(
        <div>
            <table>
                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Subjects</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>

                <tbody>

                    {house.map(display => <tr>
                        <td>{display.name}</td>
                        <td>{display.subjects.join()}</td>
                        <td>{display.city}</td>
                        <td>{display.state}</td>
                        <td>{display.age}</td>
                        <td>{display.country}</td>
                    </tr>)}  
                      
                </tbody>
            </table>
        </div>
    );
}

export default Complete;
