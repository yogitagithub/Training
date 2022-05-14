import React from 'react';
import { useState } from "react";
import './Team.css';

const diode = {
    Name: "",
    Class: "", 
    Physics: "",
    Chemistry: "",
    Biology: "",
    Maths: "",
    English: "",
    Hindi: "",
    Percentage: "",
    Rank: ""
}

function Pocket() {

    const [wood, setWood] = useState(diode.Name);
    const [bottle, setBottle] = useState(diode.Class);
    const [tiffin, setTiffin] = useState(diode.Physics);
    const [min, setMin] = useState(diode.Chemistry);
    const [max, setMax] = useState(diode.Biology);
    const [limit, setLimit] = useState(diode.Maths);
    const [box, setBox] = useState(diode.English);
    const [toy, setToy] = useState(diode.Hindi);
    const [circle, setCircle] = useState(diode.Percentage);
    const [line, setLine] = useState(diode.Rank);

    const lt1 = (ev) => {
        diode.Name = ev.target.value;
    }

    const lt2 = (ev) => {
        diode.Class = ev.target.value;
    }

    const lt3 = (ev) => {
        diode.Physics = ev.target.value;
    }

    const lt4 = (ev) => {
        diode.Chemistry = ev.target.value;
    }

    const lt5 = (ev) => {
        diode.Biology = ev.target.value;
    }

    const lt6 = (ev) => {
        diode.Maths = ev.target.value;
    }

    const lt7 = (ev) => {
        diode.English = ev.target.value;
    }

    const lt8 = (ev) => {
        diode.Hindi = ev.target.value;
    }

    const lt9 = (ev) => {
        diode.Percentage = ev.target.value;
    }

    const lt10 = (ev) => {
        diode.Rank = ev.target.value;
    }

    const packet = () => {
        setWood(diode.Name)
        setBottle(diode.Class)
        setTiffin(diode.Physics)
        setMin(diode.Chemistry)
        setMax(diode.Biology)
        setLimit(diode.Maths)
        setBox(diode.English)
        setToy(diode.Hindi)
        setCircle(diode.Percentage)
        setLine(diode.Rank)
    }


    return(

      <>

        <div className='mani'>  

                <div className='reg'>
                   <h2><b><i>MARKSHEET</i></b></h2>
                </div>

            <form>

                <div className='yog'>
                   <label>Name:</label>
                   <input className='nut' type = {diode.Name} onChange={(ev) => lt1(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                   <label>Class:</label>
                   <input className='nut' type = {diode.Class} onChange={(ev) => lt2(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Physics:</label>
                    <input className='nut' type = {diode.Physics} onChange={(ev) => lt3(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Chemistry:</label>
                    <input className='nut' type = {diode.Chemistry} onChange={(ev) => lt4(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Biology:</label>
                    <input className='nut' type = {diode.Biology} onChange={(ev) => lt5(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Maths:</label>
                    <input className='nut' type = {diode.Maths} onChange={(ev) => lt6(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>English:</label>
                    <input className='nut' type = {diode.English} onChange={(ev) => lt7(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Hindi:</label>
                    <input className='nut' type = {diode.Hindi} onChange={(ev) => lt8(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Percentage:</label>
                    <input className='nut' type = {diode.Percentage} onChange={(ev) => lt9(ev)}></input>
                </div>
                <br></br>

                <div className='yog'>
                    <label>Rank:</label>
                    <input className='nut' type = {diode.Rank} onChange={(ev) => lt10(ev)}></input>
                </div>
                <br></br>

                <input type="button" onClick={() => packet ()} value="Submit"></input>

            </form>
        </div>

        <div className='star'>

                <table>
                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Physics</th>
                            <th>Chemistry</th>
                            <th>Biology</th>
                            <th>Maths</th>
                            <th>English</th>
                            <th>Hindi</th>
                            <th>Percentage</th>
                            <th>Rank</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> {wood} </td>
                            <td> {bottle} </td>
                            <td> {tiffin} </td>
                            <td> {min} </td>
                            <td> {max} </td>
                            <td> {limit} </td>
                            <td> {box} </td>
                            <td> {toy} </td>
                            <td> {circle} </td>
                            <td> {line} </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
  }

  export default Pocket;