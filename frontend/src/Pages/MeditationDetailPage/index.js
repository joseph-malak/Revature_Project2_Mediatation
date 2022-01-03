import React from 'react';

import MantraPageHeader from './MantraPageHeader';
import MeditationList from '../../Components/MeditationList';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

const MeditationDetailPage = (props) => {

    
    return (
       
      

         <div>
             <header>
             <p></p>
            {/*<img src={props.image} className = "meditationDetail" alt="oop" />*/}
           </header>
             <body>
                 <p></p>
            <h1 className = "title">{props.name}</h1>
            <h3 className = "discriptionHomePage">
            </h3>
            </body>
         </div>
    )
}

export default MeditationDetailPage;
