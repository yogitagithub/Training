import React from 'react';
import './admin.css';

function Second() {
    return(
        <div className="earth">

        <h4 className="six">Today the date is: 26-05-2022</h4>
        <h1 className="seven">Welcome Admin</h1>

        <div>
            <button className="moon">Add New Employee</button>
        </div>
        <br></br>

        <div>
            <button className="moon">Add New Department</button>
        </div>
        <br></br>

        <div>
            <button className="moon">Add New Grade</button>
        </div>
        <br></br>

        <div>
            <button className="moon">Employee Grade Details</button>
        </div>
        <br></br>

        <div>
            <button className="moon">Prepare Monthly Salary</button>
        </div>
        <br></br>

        <div>
            <button className="moon">Generate Report</button>
        </div>

        </div>
    );
 }

export default Second;
