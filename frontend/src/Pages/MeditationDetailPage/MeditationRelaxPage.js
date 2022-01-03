import React from 'react'
import reactDom from 'react-dom';
import relaxing from '../../progressiverelaxation.png';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './style.css';
import NavbarLogged from '../../Components/NavbarLogged';


const MeditationRelaxPage = () => {
    return (
        <div className='wrapperpages'>
            <NavbarLogged />
<div className = "mappingDiv">
        
       <img src={relaxing} className = "meditationImage" alt="oop" />
    
        <body>
            
       <h1 className = "meditationLongDescription">Progressive Relaxation</h1>
       <h3 className = "meditationLongDescription">Progressive muscle relaxation (PMR) is a form of therapy that involves tightening and relaxing your muscle groups, one at a time, in a specific pattern. The goal is to release tension from your muscles, while helping you recognize what that tension feels like. When practiced regularly, this technique may help you manage the physical effects of stress.
       </h3>
       <Link to= '/MeditatingRelaxPage' className = "meditationLink" >Start Meditation</Link>
       </body>
        </div>
        </div>
    )
}

export default MeditationRelaxPage
