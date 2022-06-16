import logo from './logo.svg';
import './App.css';
import  First from './Login/login';
import Last from './Register/register';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
    <BrowserRouter> 
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              </Navbar.Collapse>
        
        <Nav>
          <Nav.Link as={Link} to="/bench">Login</Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/chair">
              Registration
          </Nav.Link>
        </Nav>
        
        </Container>
      </Navbar>

    <div>

      <Routes>
              <Route path = "/bench" element = {<First></First>}></Route>
              <Route path = "/chair" element = {<Last></Last>}></Route>
      </Routes>
    </div>
      </div> 

        </BrowserRouter>

      <div className="five">

        <h1><b className="one">EMPLOYEE</b></h1>
        <h1><b className="two">MANAGEMENT</b></h1>
        <h1 className="three"><b>SYSTEM</b></h1>

      </div>

      <div className="four">
          <img src="https://www.shrmpro.com/wp-content/uploads/2020/08/Employee-Management.png"></img>
      </div>

    </>
  );
}

export default App;
