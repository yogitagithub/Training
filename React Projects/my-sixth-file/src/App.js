import logo from './logo.svg';
// import Swing from './display/display';
import Select from './Route/teachers';
import Complete from './Table/Table';
import Paste from './Filter/filter';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

        <BrowserRouter>

            <div className="App-header">
                <Select></Select>
            </div>

            <Routes>
                 <Route path = 'enter' element = {<Complete></Complete>}></Route>
                 <Route path = 'first' element = {<Paste></Paste>}></Route>
            </Routes>

        </BrowserRouter>

            {/* <Swing></Swing> */}

      </div>
  );
}

export default App;
