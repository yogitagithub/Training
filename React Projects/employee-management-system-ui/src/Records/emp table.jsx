import React from 'react';
import { useState } from "react";
import { useEffect } from "react";


function Box() {

    const [cut, setCut] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/sun')
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
                            <th>Employee ID</th>
                            <th>Employee Title</th>
                            <th>Employee Name</th>
                            <th>Date of Birth</th>
                            <th>Date of Joining</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pin Code</th>
                            <th>Mobile No.</th>
                            <th>Email ID</th>
                            <th>Pan Card No.</th>
                            <th>Pan Card Img</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {cut.map(put => <tr>
                        <td>{put._id}</td>
                        <td>{put.title}</td>
                        <td>{put.name}</td>
                        <td>{put.dob}</td>
                        <td>{put.doj}</td>
                        <td>{put.address}</td>
                        <td>{put.city}</td>
                        <td>{put.state}</td>
                        <td>{put.pincode}</td>
                        <td>{put.mobile}</td>
                        <td>{put.email}</td>
                        <td>{put.pancard}</td>
                        <td>{put.panimg}<img height="200px" width="200px" src="https://www.thespruce.com/thmb/tClzdZVdo_baMV7YA_9HjggPk9k=/4169x2778/filters:fill(auto,1)/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"></img></td>
                    </tr>)} 
                    
                    </tbody>
                </table>

        </div>

    );
}

export default Box;


