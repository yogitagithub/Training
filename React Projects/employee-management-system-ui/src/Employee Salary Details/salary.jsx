import React from 'react';
import './salary.css';
import { useState } from "react";


function Sixth() {

    const [home, setHome] = useState({});
    

    
    const village = (ev, type) => {
        const val = ev.target.value;
        console.log(val)
        console.log(type)
        const userLocal = home;
        userLocal[type] = val;
        setHome(userLocal)
        console.log(home)
    }

    const hut = () => {
        fetch('', {
            method: 'POST',
            body: JSON.stringify(home),
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
        <div className="uranus">
        
        <h2 className="thirtyseven">Salary Details</h2>

            <div className="fourty">
                <span>
                    <label className="thirtyeight">Employee Name</label>
                    <input  className="thirtynine" type="text" onChange={(ev) => village(ev, 'name')}></input>
                </span>
                
                <span>
                    <label className="thirtyeight">Current Department Name</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'Cdeptname')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyeight">Current Grade Name</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'Cgradename')}></input>
                </span>

                <span>
                    <label className="thirtyeight">Salary Year</label>
                    <select className="thirtynine" onChange={(ev) => village(ev, 'year')}>
                        <option value="Select Year">Select Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyeight">Salary Month</label>
                    <select className="thirtynine" onChange={(ev) => village(ev, 'month')}>
                        <option value="Select Month">Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                    </select>
                </span>

                <span>
                    <label className="thirtyeight">Basic</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'basic')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyeight">HRA</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'hra')}></input>
                </span>

                <span>
                    <label className="thirtyeight">Dearness Allowance</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'da')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyeight">Travel Allowance</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'ta')}></input>
                </span>

                <span>
                    <label className="thirtyeight">Medical Allowance</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'medical')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyeight">Bonus</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'bonus')}></input>
                </span>

                <span>
                    <label className="thirtyeight">Gross</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'gross')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <span>
                    <label className="thirtyeight">Providient Fund</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'fund')}></input>
                </span>

                <span>
                    <label className="thirtyeight">Professional Tax</label>
                    <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'tax')}></input>
                </span>
            </div>
            <br></br>

            <div>
                <label className="thirtyeight">Net Salary</label>
                <input type="text" className="thirtynine" onChange={(ev) => village(ev, 'salary')}></input>
            </div>
            <br></br>

            <span><input type="button" className="fourtyone" onClick={() => hut()} value="SUBMIT"></input></span>
            <span><input type="button"  className="fourtytwo" value="CLEAR"></input></span>
        </div>
    );
}
 

export default Sixth;