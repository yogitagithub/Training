import React from 'react';
import './grade.css';
import { useState } from "react";

function Fifth() {

    const [see, setSee] = useState({});
    

    
    const pet = (ev, type) => {
        const val = ev.target.value;
        console.log(val)
        console.log(type)
        const userLocal = see;
        userLocal[type] = val;
        setSee(userLocal)
        console.log(see)
    }

    const door = () => {
        fetch('', {
            method: 'POST',
            body: JSON.stringify(see),
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
        <div className="saturn">

            <h2 className="thirty">Department Details</h2>

            <div className="thirtyfive">

            <span>
                    <label className="twentythree">Department Name</label>
                    <input className="thirtytwo" type="text" placeholder="Department Name" required onChange={(ev) => pet(ev, 'Deptname')}></input>
            </span>
            <br></br>

            <span>
                    <label className="thirtyone">Grade Name</label>
                    <input  className="thirtytwo" type="text" placeholder="Enter Grade Name" required onChange={(ev) => pet(ev, 'Gradename')}></input>
            </span>
            </div>

                
            <div>
                <span>
                    <label className="thirtyone">Basic</label>
                    <input className="thirtytwo" type="text" placeholder="Enter Basic" required onChange={(ev) => pet(ev, 'basic')}></input>
                </span>

                <span>
                    <label className="thirtyone">Dearness Allowance</label>
                    <input className="thirtytwo" type="text" placeholder="Enter Dearness Allowance" required onChange={(ev) => pet(ev, 'da')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyone">Travel Allowance</label>
                    <input type="text" className="thirtytwo" placeholder="Enter Travel Allowance" required onChange={(ev) => pet(ev, 'ta')}></input>
                </span>

                <span>
                    <label className="thirtyone">HRA</label>
                    <input type="text" className="thirtytwo" placeholder="Enter Home Rent Allowance" required onChange={(ev) => pet(ev, 'hra')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyone">Medical Allowance</label>
                    <input type="text" className="thirtytwo" placeholder="Enter Medical Allowance" required onChange={(ev) => pet(ev, 'medical')}></input>
                </span>

                <span>
                    <label className="thirtyone">Bonus</label>
                    <input type="text" className="thirtytwo" placeholder="Enter Bonus" required onChange={(ev) => pet(ev, 'bonus')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyone">Providient Fund</label>
                    <input type="text" className="thirtytwo" placeholder="Enter Providient Fund" required onChange={(ev) => pet(ev, 'fund')}></input>
                </span>

                <span>
                    <label className="thirtyone">Proffesional Tax</label>
                    <input type="text" className="thirtytwo" placeholder="Enter Proffesional Tax" required onChange={(ev) => pet(ev, 'tax')}></input>
                </span>
            </div>
            <br></br>

            <span><input type="button" className="thirtythree"  onClick={() => door()} value="SUBMIT"></input></span>
            <span><input type="button" className="thirtyfour" value="CLEAR"></input></span>
            
        </div>
    );
 }

export default Fifth;