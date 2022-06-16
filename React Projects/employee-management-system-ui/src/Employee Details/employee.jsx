import React from 'react';
import './employee.css';
import { useState } from "react";


function Third() {

    const [box, setBox] = useState({});
    

    
    const pen = (ev, type) => {
        const val = ev.target.value;
        console.log(val)
        console.log(type)
        const userLocal = box;
        userLocal[type] = val;
        setBox(userLocal)
        console.log(box)
    }

    const diary = () => {
        fetch('http://localhost:3001/sun', {
            method: 'POST',
            body: JSON.stringify(box),
            headers: {
                'Content-type': "application/json; charset=UTF-8"
            }
        })
          .then(resp =>
              resp.json()
        )
           .then(dt => {
              alert('success')
          })
        }


    return(
        <>
        <div className="mars">
        <h2 className="seventeen">Employee Details</h2>

        <div className="stars">
                <span>
                    <label className="eighteen">Employee Title</label>
                    <select className="twenty" onChange={(ev) => pen(ev, 'title')}>
                        <option value="Select Title">Select Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Miss">Miss</option>
                        <option value="Mrs">Mrs</option>
                    </select>
                </span>

                <span>
                    <label className="eighteen">Employee Name</label>
                    <input className="twenty" type="text" placeholder="Enter Employee Name"  onChange={(ev) => pen(ev, 'name')} required></input>
                </span>
            </div>
            <br></br>
            
            <div className="stars">
                <span>
                    <label className="eighteen">Date of Birth</label>
                    <input className="twenty" type="text" placeholder="Enter Birth Date" onChange={(ev) => pen(ev, 'dob')} required></input>
                </span>
            
                <span>
                    <label className="eighteen">Date of Joining</label>
                    <input className="twenty" type="text" placeholder="Enter Joining Date" onChange={(ev) => pen(ev, 'doj')} required></input>
                </span>
            </div>
            <br></br>

            <div className="stars">
                <span>
                    <label className="eighteen">Address</label>
                    <input  className="twenty" type="text" placeholder="Employee Address" onChange={(ev) => pen(ev, 'address')} required></input>
                </span>

                <span>
                    <label className="eighteen">City</label>
                    <input  className="twenty" type="text" placeholder="Employee City" onChange={(ev) => pen(ev, 'city')} required></input>
                </span>
            </div>
            <br></br>

            <div className="stars">
                <span>
                    <label className="eighteen">State</label>
                    <select className="twenty" onChange={(ev) => pen(ev, 'state')}>
                        <option value="Select State">Select State</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Rajasthan">Rajasthan</option>
                    </select>

                </span>

                <span>
                    <label className="eighteen">Pin Code</label>
                    <input className="twenty" type="text" placeholder="Employee Pincode" onChange={(ev) => pen(ev, 'pincode')} required></input>
                </span>
            </div>
            <br></br>
            
            <div className="stars">
                <span>
                    <label className="eighteen">Mobile No.</label>
                    <input className="twenty" type="text" placeholder="Employee Mobile No" onChange={(ev) => pen(ev, 'mobile')} required></input>
                </span>

                <span>
                    <label className="eighteen">Email ID</label>
                    <input className="twenty" type="text" placeholder="Employee Mail ID" onChange={(ev) => pen(ev, 'email')} required></input>
                </span>
            </div>
            <br></br>
            
            <div className="stars">
                <span>
                    <label className="eighteen">Pan Card No.</label>
                    <input className="twenty" type="text" placeholder="Employee Pan Card No"  onChange={(ev) => pen(ev, 'pancard')} required></input>
                </span>

                <span>
                    <label className="eighteen">Upload Pan Card Image</label>
                    <input className="twenty" type="file" onChange={(ev) => pen(ev, 'panimg')}></input>
                </span>
            </div>
            <br></br>
            
            <span><input className="pocket" type="button" onClick={() => diary()} value="SUBMIT"></input></span>
            <span><input  className="file" type="button"  value="CLEAR"></input></span>

                        
        </div>

         </>   
        
    );
 }

export default Third;
