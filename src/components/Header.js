import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = (props) =>{
    return(
        <div  md="12">
         <Navbar bg="dark" variant="dark bar">
        <Navbar.Brand href="#home">
        {/* <i class="fas fa-tape"></i> */}
          <h2 className ="movie-title">{props.text}</h2>
         </Navbar.Brand>
       </Navbar>
        </div>
    )
}
export default Header;