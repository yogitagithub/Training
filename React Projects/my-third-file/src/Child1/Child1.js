import'./Child1.css';
import Child2 from './Child2/Child2';

function Child1() {
    return(

        <div>

            <div className="header">

                <span className="tags"><a href="">Submit</a></span>
                <span className="tags"><a href="">Clear</a></span>

            </div>

            <Child2></Child2>

        </div>
    );
}

export default Child1;