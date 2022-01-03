import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import breathe from '../../breathing.png';
import './style.css'
import NavbarLogged from '../../Components/NavbarLogged';

const MeditationBreathePage = () => {
    return (
        
        <div className='wrapperpages'>
           <NavbarLogged />
        <div className = "mappingDiv">
      
       <img src={breathe} className = "meditationImage" alt="oop" />
     
        <body>
            
       <h1 className = "title">Breathing Meditation</h1>
       <h3 className = "meditationLongDescription">Mindful breathing is a very basic yet powerful mindfulness meditation practice. The idea is simply to focus your attention on your breathing—to its natural rhythm and flow and the way it feels on each inhale and exhale. Focusing on the breath is particularly helpful because it serves as an anchor–something you can turn your attention to at any time if you start to feel stressed or carried away by negative emotions.
       </h3>
       <Link to= '/MeditatingBreathePage' className = "meditationLink" >Start Meditation</Link>
       </body>
        </div>
        </div>
    )
}

export default MeditationBreathePage
