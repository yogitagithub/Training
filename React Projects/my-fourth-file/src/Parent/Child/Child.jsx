import './Child.css';
import { useState } from "react";
import { useEffect } from "react";

const outputText = 'INPUT VALUES';

const form = {
    "First no": '',
    "Second no": '',
    "Third no": ''
}

function Child() {

    const [input, setInput] = useState(outputText);
    const [user, setUser] = useState(form)

    useEffect (() => {
        setInput (outputText)
        setUser (form)
    }, [])

    const pen = (props) => {
        console.log("called")
        props.bottle ({"First no": '', "Second no": '', "Third no": ''})
    }

return(
      <div>

        <div>
            <h1>{input}</h1>
        </div>

        <div>
            <form>

                <div>
                    <label>First no:</label>
                    <input type={'text'}></input>
                </div>
                <br></br>

                <div>
                    <label>Second no:</label>
                    <input type={'text'}></input>
                </div>
                <br></br>

                <div>
                    <label>Third no:</label>
                    <input type={'text'}></input>
                </div>
                <br></br>

                <div>
                    <input type="button" value="Submit" onClick={() => pen()}></input>
                </div>

            </form>
        </div>

      </div>

    );
}

export default Child;