import React, {useState}  from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import MeditationInstructions from "../../Components/Meditating/Instructions";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerClass from "../../Components/Meditating/Timer/TimerClass";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";
import './style.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import axios from 'axios';
import NavbarLogged from "../../Components/NavbarLogged";
import { useSelector } from 'react-redux';
import MeditationListPage from "../MeditationListPage";


const MeditatingBreathePage = (props) => {

    const clearState = () => {
        submittingBreathe.sending = false;
        //setSubmittingBreathe(false) // does not work
      };

    const [submittingBreathe, setSubmittingBreathe] = useState({
        sending: false,
    });


    const user = useSelector(state => state.user);

    console.log("MeditatingBreathePage ==================")
    console.log(user);


    const [journal, setJournal] = useState({
        userid: user.id,
        journalnotes : ''
    });


    function onChangeHandler(event){
        //console.log(event.target.name)
        setJournal({...journal,
            [event.target.name]: event.target.value
        });
        console.log("onChangeHandler ========================");
        console.log(journal)
    }    


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(journal);
        axios.post("http://localhost:9001/users/journal", journal)
        .then((response) => {
            console.log(response);
         
        });
        setSubmittingBreathe(true)
    };

    if(submittingBreathe.sending === false){
   
        return(
            <div className = "wrapperpages">
                {clearState()}
                <NavbarLogged />
                <div className="container text-center">
                    <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                    {/* <TimerDisplay />
                    <TimerButtons /> */}
                    
                    <TimerClass minutes="15" /> {/*minutes=props.minutes*/}
                    {/*meditation={props.meditation_id}*/}
                    {
                    // Dynamic Instructions
                        // Every minute give a new set of instructions.
                        // 5 minutes - 5 instructions.
                        
                    }
                    {/* { props.instructions.map((instruction) => ) } */}

                    <h1>Instructions for Breathing Style:</h1>
                    <ul class="list-group">
                    <li class="list-group-item">1. Gently breathe deeply in air into your nose ...</li>
                    <li class="list-group-item">2. feel your abdomen gently expand...</li>
                    <li class="list-group-item">3. breathe out of your mouth and let it all go.</li>
                    <li class="list-group-item">4. Gently repeat.</li>
                    </ul>

                    <form onSubmit = {submitHandler}>
                        <br></br>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Please write your experience and feelings about today's session</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="journalnotes" onChange={onChangeHandler} value={journal.journalnotes} rows="3"></textarea>
                        </div>
                        <button className="btn btn-outline-primary btn-lg px-10" type="submit" onSubmit={submitHandler} >Submit</button>
                    </form>

                    <br></br>
                    <Link to= '/MeditationList' className="lastLink">Go to List of Meditations</Link>
                    {/* Diary Notes textarea to display after the meditation timer completes.*/}

                    {/* 
                    <MeditationInstructions />
                    <MeditationDiaryNotes /> */}
                </div>
            </div>
            )
        }
        else{
            return(
            <div>
                
                <MeditationListPage />
            
                </div>
            )
        }
}


export default MeditatingBreathePage;