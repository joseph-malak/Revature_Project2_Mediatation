import React from 'react'
import HomePage from '../../Pages/HomePage';
import {Link} from 'react-router-dom';

const LoggedNavbar = () => {
    <div className = "navWrapper">
        <Link className="nav-link active" aria-current="page" to = '/HomePage'>Home</Link>
        <Link className="nav-link active" aria-current="page" to = '/RegistrationPage'>Create an account</Link>
        <Link className="nav-link active" aria-current="page" to = '/LoginPage'>Login</Link>
</div>
}

export default LoggedNavbar;