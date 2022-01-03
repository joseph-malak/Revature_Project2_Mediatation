import React from 'react'
import mantras from '../../mantra.png';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './style.css';
import NavbarLogged from '../../Components/NavbarLogged';

const MeditationMantraPage = () => {
    return (
        <div className = "wrapperpages">
            <NavbarLogged />
        <div className = "mappingDiv">
           
       <img src={mantras} className = "meditationImage" alt="oop" />
     
        <body>
          
       <h1 className = "title">Mantra Meditation</h1>
       <h3 className = "meditationLongDescription">Mentra meditation is the reciting of a word or phrase. This can be done either outloud or in the mind. People do mantra meditation for different reasons. For some, it serves as a kind of mental protection against unwelcome distractions or emotions, as when battling sleeplessness or coping with fears associated with travel.  
       </h3>
       <Link to= '/MeditatingMantraPage' className = "meditationLink" >Start Meditation</Link>
       </body>
        </div>
        </div>
    )
}

export default MeditationMantraPage
