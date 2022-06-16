import React from 'react';
import { useState } from "react";
import { useEffect } from "react";


function Fox() {

    const [cutting, setCutting] = useState([]);

    useEffect(() => {
        fetch('')
          .then(resp =>
              resp.json()
        )
        .then(dt => {
            setCutting(dt)
        })
    }, [])

    return(

        <div>
            <table>
                    <thead>

                        <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                            <th>Grade Name</th>
                             <th>Basic</th>
                            <th>DA</th>
                            <th>TA</th>
                            <th>HRA</th>
                            <th>Medical</th>
                            <th>Bonus</th>
                            <th>PF</th>
                            <th>Tax</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {cutting.map(ice => <tr>
                        <td>{ice._id}</td>
                        <td>{ice.Deptname}</td>
                        <td>{ice.Gradename}</td>
                        <td>{ice.basic}</td>
                        <td>{ice.da}</td>
                        <td>{ice.ta}</td>
                        <td>{ice.hra}</td>
                        <td>{ice.medical}</td>
                        <td>{ice.bonus}</td>
                        <td>{ice.fund}</td>
                        <td>{ice.tax}</td>
                    </tr>)} 
                    
                    </tbody>
                </table>

        </div>

    );
}

export default Fox;
