import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';

function Nav(){
    return (
    <div className="Nav">

<>
 
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
     MOVIE-SEARCH 
    </Navbar.Brand>
  </Navbar>
</>

    </div>
);
    }

    export default Nav;
