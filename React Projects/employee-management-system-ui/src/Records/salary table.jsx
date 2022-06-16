import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

function Cream() {

    const [snow, setSnow] = useState([]);

    useEffect(() => {
        fetch('')
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
                        <th>Employee Name</th>
                        <th>Department Name</th>
                            <th>Grade Name</th>
                            <th>Salary Year</th>
                            <th>Salary Month</th>
                             <th>Basic</th>
                            <th>HRA</th>
                            <th>DA</th>
                            <th>TA</th>
                            <th>Medical</th>
                            <th>Bonus</th>
                            <th>Gross</th>
                            <th>Fund</th>
                            <th>Tax</th>
                            <th>Net Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {cutting.map(eye => <tr>
                        <td>{eye.name}</td>
                        <td>{eye.Cdeptname}</td>
                        <td>{eye.Cgradename}</td>
                        <td>{eye.year}</td>
                        <td>{eye.month}</td>
                        <td>{eye.basic}</td>
                        <td>{eye.hra}</td>
                        <td>{eye.da}</td>
                        <td>{eye.ta}</td>
                        <td>{eye.medical}</td>
                        <td>{eye.bonus}</td>
                        <td>{eye.gross}</td>
                        <td>{eye.fund}</td>
                        <td>{eye.tax}</td>
                        <td>{eye.salary}</td>
                    </tr>)} 
                    
                    </tbody>
                </table>

        </div>

    );
}

export default Cream;



