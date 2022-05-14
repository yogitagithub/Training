import Child from './Child/Child';
import { useState } from "react";
import { useEffect } from "react";
import './Parent.css';

const headerText = 'OUTPUT';

const pencil = () => {

} 

function Parent() {

    const [header, setHeader] = useState(headerText);

    useEffect (() => {
        setHeader (headerText)
    }, [])


return(
        <div>

            <div className='uranus'>
                {header}
            </div>

            <div>
                <table>

                    <thead>
                        <tr>
                            <th>First no</th>
                            <th>Second no</th>
                            <th>Third no</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <Child mouse={bottle}></Child>

        </div>
    
    );
}

export default Parent;

