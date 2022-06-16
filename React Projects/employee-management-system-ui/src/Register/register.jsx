import React from 'react';
// import { Button } from 'react-bootstrap';

function Last() {

    return(
        <>
            <div>
            <label>Username:</label>
            <input type="text" placeholder="Enter Username" required></input>
            </div>

            <div>
            <label>Email:</label>
            <input type="text" placeholder="Enter Email" required></input>
            </div>


            <div>
            <label>Mob No:</label>
            <input type="text" placeholder="Enter Mobile Number" required></input>
            </div>


            <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter Password" required></input>
            </div>


            <div>
            <label>Confirm Password:</label>
            <input type="password" placeholder="Enter Confirm Password" required></input>
            </div>

        <div>
            <input className="shore" type="button" value="Register"></input>
        </div>  


  

            
  
        </>
    );
 }

export default Last;

