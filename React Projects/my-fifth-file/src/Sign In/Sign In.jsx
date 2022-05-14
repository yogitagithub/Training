import React from 'react';
import './Sign In.css';

function Pen() {
    return(
        <>
          <div className='man'>  

                <div className='regi'>
                   <h2><b><i>Sign In</i></b></h2>
                </div>

            <form>

                <div className='yogi'>
                   <label>Username:</label>
                   <input type="text" className='nuts'></input>
                </div>
                <br></br>

                <div className='yogi'>
                   <label>Password:</label>
                   <input type="password" className='nuts'></input>
                </div>
                <br></br>

                <input type="button" value="Login"></input>

          </form>
       </div>
     </>
  );
}

export default Pen;