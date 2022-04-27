import'./Child3.css';
import Child4 from './Child4/Child4';

function Child3() {
    return(

        <div>

            <div className="venus">

                <dl>
                    <dt>Section1</dt>
                    <dd>Item1</dd>
                    <dd>Item2</dd>
                </dl>

            </div>

            <Child4></Child4>

        </div>
    );
}

export default Child3;
