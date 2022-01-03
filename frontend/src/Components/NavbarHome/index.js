import React from 'react'
import HomePage from '../../Pages/HomePage';
import './style.css';
import {Link} from 'react-router-dom';
import LoggedNavbar from './LoggedNavbar';
import NotLoggedNavbar from './NotLoggedNavbar';

const NavbarHome = () => {



return(
<div className = "navWrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand">Reconnect</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link className="nav-link active" aria-current="page" to = '/'>Home</Link>
        <Link className="nav-link active" aria-current="page" to = '/RegistrationPage'>Create an account</Link>
        <Link className="nav-link active" aria-current="page" to = '/LoginPage'>Login</Link>
       
        
      </div>
    </div>
  </div>
</nav>
</div>
)
}
export default NavbarHome;
