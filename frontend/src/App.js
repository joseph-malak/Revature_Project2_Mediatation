import {Route, Routes, Link} from 'react-router';
import HomePage from './Pages/HomePage';
import MeditationDetailPage from './Pages/MeditationDetailPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import MeditationList from './Components/MeditationList';
import MeditationRelaxPage from './Pages/MeditationDetailPage/MeditationRelaxPage';
import MeditationMantraPage from './Pages/MeditationDetailPage/MeditationMantraPage';
import MeditationBreathePage from './Pages/MeditationDetailPage/MeditationBreathePage';
import MeditatingBreathePage from './Pages/MeditatingPage/MeditatingBreathePage';
import MeditatingMantraPage from './Pages/MeditatingPage/MeditatingMantraPage';
import MeditatingRelaxPage from './Pages/MeditatingPage/MeditatingRelaxPage';
import Logout from './Components/Logout';
import React, {useState} from "react";
import JournalPage from './Pages/JournalPage';



function App() {
//   let isLoggedIn = false;

  
// const [user, setUser] = useState({name:"", email:""});
// const [error, setError] = useState("");

// const Login = details => {
//   console.log(details);

// if(details.email == adminUser.email && details.password == adminUser.password){
//   console.log("Logged in")
//   setUser({
//     name: details.name,
//     email: details.email 
//   });
// }else{
//   setError("Details do not match!");
// }
// }
// const Logout = () =>{
//   console.log("logout");
//   setUser({name: "", email: ""})
// }

  return (
    <div>
    

    
     
      {/* <Provider store={store}>
        <MeditatingPage />
      </Provider> */}
      
      <Routes>
      <Route path = '/' element={<HomePage/>}/>
    
      <Route path = '/Logout' element = {<Logout />}/>
      <Route path = '/LoginPage' element={<LoginPage />}/>
      <Route path = '/RegistrationPage' element={<RegistrationPage/>}/>

      <Route path = '/MeditationList' element = {<MeditationList/>}/>
      <Route path = '/MeditationDetailPage' element = {<MeditationDetailPage/>}/>
      
      <Route path = '/MeditationRelaxPage' element = {<MeditationRelaxPage/>}/>
      <Route path = '/MeditationMantraPage' element = {<MeditationMantraPage/>}/>
      <Route path = '/MeditationBreathePage' element = {<MeditationBreathePage/>}/>

      <Route path = '/MeditatingMantraPage' element = {<MeditatingMantraPage/>}/>
      <Route path = '/MeditatingRelaxPage' element = {<MeditatingRelaxPage/>}/>
      <Route path = '/MeditatingBreathePage' element = {<MeditatingBreathePage/>}/>

      <Route path = '/JournalPage' element = {<JournalPage/>}/>

      </Routes>
    
    </div>
  );
}

export default App;