import React from 'react'
import Navbar from '../../Components/NavbarHome'
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';
import MeditationListPage from '../MeditationListPage';
import logo from '../../Homepage.png';
import './style.css'
import LoggedNavbar from '../../Components/NavbarHome/LoggedNavbar';
import NavbarHome from '../../Components/NavbarHome';

const HomePage = () => {


    return (
         
        <div className='wrapperpages'>
            <NavbarHome />
            <header>
            <img src={logo} className = "picture" alt="oop" height = "600px" width = "50%"/>
            </header>
            <body>
           <h1 className = "title">Our Mission:</h1>
           <h3 className = "discriptionHomePage">Meditation application for the user to gain some quiet time for the mind. The user stops to take some time out during the day to  reconnect with their true self. Choose from a wide selection of meditation styles and track your sessions with our built in timers. We look forward to 
           helping you Reconnect to the things that matter to you.
           </h3>
           </body>
        </div>
      
    )
}

export default HomePage;
