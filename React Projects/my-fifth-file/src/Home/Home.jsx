import React from 'react';
import { useState } from "react";
import './Home.css';

function Register() {

    const [box, setBox] = useState({});
    const [click, setClick] = useState('');
    const [status, setStatus] = useState('');

    const pen = (ev, type) => {
        const val = ev.target.value;
        console.log(val)
        console.log(type)
        const userLocal = box;
        userLocal[type] = val;
        setBox(userLocal)
        console.log(box)
    }

    const diary =() => {

        if (box && isNaN(parseInt(box.age))) {
            setClick('Please enter a valid age')
            setStatus('failure')
            
        }
        else if (box && !box.username) {
            setClick('Please enter a valid username')
            setStatus('failure')
        }
        else if (box && !box.address) {
            setClick('Please enter a valid address')
            setStatus('failure')
        }
        else if (box && !box.city) {
            setClick('Please enter a valid city')
            setStatus('failure')
        }
        else if (box && !box.state) {
            setClick('Please enter a valid state')
            setStatus('failure')
        }
        else if (box && !box.age) {
            setClick('Please enter a valid age')
            setStatus('failure')
        }
        else{
        fetch('http://localhost:3001/users', {
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
               setClick('Successfully Done')
               setStatus('success')
           })
        }
    }


    return(
        <div className="house">
            <form>

                <div className="mars">
                    <label>Username:</label>
                    <input className="moon" onChange={(ev) => pen(ev, 'username')}></input>
                </div>
               <br></br>

               <div className="mars">
                    <label>Address:</label>
                    <input className="moon" onChange={(ev) => pen(ev, 'address')}></input>
                </div>
               <br></br>

               <div className="mars">
                    <label>City:</label>
                    <input className="moon" onChange={(ev) => pen(ev, 'city')}></input>
                </div>
               <br></br>

               <div className="mars">
                    <label>State:</label>
                    <input className="moon" onChange={(ev) => pen(ev, 'state')}></input>
                </div>
               <br></br>

               <div className="mars">
                    <label>Age:</label>
                    <input className="moon" onChange={(ev) => pen(ev, 'age')}></input>
                </div>
               <br></br>

               <div>
                   <input type="button" onClick={() => diary()} value="Submit"></input>
                </div>

            </form>

            <div className={status === 'failure' ? 'create' : 'message'}>{click}</div>
        </div>    
    );
}

export default Register;