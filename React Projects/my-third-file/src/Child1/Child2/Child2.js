import'./Child2.css';
import Child3 from './Child3/Child3';

function Child2() {
    return(

       <div>

           <div className="mars">

               <form>

                    <div className="jupiter">
                       <label>Username:</label>
                       <br></br>
                       <div>
                          <input type="text"></input>
                       </div>
                    </div>

                    <div className="jupiter">
                       <label>Password::</label>
                       <br></br>
                       <div>
                          <input type="password"></input>
                       </div>
                    </div><br></br>

                    <div className="uranus">
                        <input type="button" value="click"></input>
                    </div>

               </form>

           </div>

           <Child3></Child3>

       </div>
    );
}

export default Child2;
