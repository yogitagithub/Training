import React from 'react';
import { useState } from "react";
import './Sign Up.css';

const charger = {
    Username: "",
    Password: "", 
    ConfirmPassword: "",
    Address: "",
    City: "",
    State: "",
    ZipCode: ""
}

function Pencil() {

    const [page, setPage] = useState(charger.Username);
    const [copy, setCopy] = useState(charger.Password);
    const [register, setRegister] = useState(charger.ConfirmPassword);
    const [sun, setSun] = useState(charger.Address);
    const [moon, setMoon] = useState(charger.City);
    const [pluto, setPluto] = useState(charger.State);
    const [wire, setWire] = useState(charger.ZipCode);

    const btn1 = (ev) => {
        charger.Username = ev.target.value;
    }

    const btn2 = (ev) => {
        charger.Password = ev.target.value;
    }

    const btn3 = (ev) => {
        charger.ConfirmPassword = ev.target.value;
    }

    const btn4 = (ev) => {
        charger.Address = ev.target.value;
    }

    const btn5 = (ev) => {
        charger.City = ev.target.value;
    }

    const btn6 = (ev) => {
        charger.State = ev.target.value;
    }

    const btn7 = (ev) => {
        charger.ZipCode = ev.target.value;
    }

    const phone = () => {
        setPage(charger.Username)
        setCopy(charger.ConfirmPassword)
        setRegister(charger.Password)
        setSun(charger.Address)
        setMoon(charger.City)
        setPluto(charger.State)
        setWire(charger.ZipCode)
    }


    return(

      <>

        <div className='mani'>  

                <div className='reg'>
                   <h2><b><i>DETAILS</i></b></h2>
                </div>

            <form>

                <div className='yog'>
                   <label>Username:</label>
                   <input className='nut' type = {charger.Username} onChange={(ev) => btn1(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                   <label>Password:</label>
                   <input className='nut' type = {charger.Password} onChange={(ev) => btn2(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Confirm Password:</label>
                    <input className='nut' type = {charger.ConfirmPassword} onChange={(ev) => btn3(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Address:</label>
                    <input className='nut' type = {charger.Address} onChange={(ev) => btn4(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>City:</label>
                    <input className='nut' type = {charger.City} onChange={(ev) => btn5(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>State:</label>
                    <input className='nut' type = {charger.State} onChange={(ev) => btn6(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Zip Code:</label>
                    <input className='nut' type = {charger.ZipCode} onChange={(ev) => btn7(ev)}></input>
                </div>
                <br></br>

                <input type="button" onClick={() => phone ()} value="Submit"></input>

            </form>
        </div>

        <div className='star'>

                <table>
                    <thead>

                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Confirm Password</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> {page} </td>
                            <td> {copy} </td>
                            <td> {register} </td>
                            <td> {sun} </td>
                            <td> {moon} </td>
                            <td> {pluto} </td>
                            <td> {wire} </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
  }

  export default Pencil;