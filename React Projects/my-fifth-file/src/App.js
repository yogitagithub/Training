import logo from './logo.svg';
import './App.css';
// import Pencil from './Sign Up/Sign Up';
// import Pen from './Sign In/Sign In';
// import String from './Navbar/Navbar';
import Show from './Navigation/Navigation';
import Register from './Home/Home';
import User from './Admin/Admin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <div className="App-header">

            {/* <String></String> */}
            <Show></Show>

          </div>

          <Routes>
            {/* <Route path = 'cap' element = {<Pencil></Pencil>}></Route>
            <Route path = 'tap' element = {<Pen></Pen>}></Route> */}
            <Route path = 'digit' element = {<Register></Register>}></Route>
            <Route path = 'value' element = {<User></User>}></Route>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
