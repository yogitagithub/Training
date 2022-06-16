import React from 'react';
import './login.css';
import { Form } from 'react-bootstrap';


function First() {

    
    return(
        

        
        <div>

         {/* <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form> */}
             <div className="mani">
                
         <form> 

            <div>
                <button className="light" onClick={() => document()}>X</button>
            </div>

            <div>
                <img height="180px" weight="180px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w0iLn47qlyZKqAWdYuahcG16QzNFa0dt4YieTcNzyzvtVJ6NuVlzHGEa8Or1qa02cwY&usqp=CAU"></img>
            </div>
            <br></br>

            <div>
            <label className="cotton"><b>Username:</b></label>
            </div>
            <div>
            <input  className="stick" type="text" placeholder="Enter Username" required></input>
            </div>

            <div>
            <label className="cotton"><b>Password:</b></label>
            </div>
            <div>
            <input  className="stick" type="password" placeholder="Enter Password" required></input>
            </div>

            <div>
                <input className="enter" type="button" value="Login"></input>
            </div>

            <div>
                <input  className="btn" type="button" value="Cancel"></input>
            </div>

          
        </form>
        </div> 
        </div>
        
    );
 }

export default First;
