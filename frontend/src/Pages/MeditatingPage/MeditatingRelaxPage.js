import React, {useState}  from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import MeditationInstructions from "../../Components/Meditating/Instructions";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerClass from "../../Components/Meditating/Timer/TimerClass";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";
import './style.css'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import axios from 'axios';
import NavbarLogged from "../../Components/NavbarLogged";
import { useSelector } from 'react-redux';
import MeditationListPage from "../MeditationListPage";

const MeditatingRelaxPage = (props) => {

    const clearState = () => {
        submittingRelax.sending = false;
      };

    const [submittingRelax, setSubmittingRelax] = useState({
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
        setSubmittingRelax(true)
    };

    if(submittingRelax.sending === false){
    return(
        <div>
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

                <h1>Instructions for Relaxation Style:</h1>
                <br></br>
                <ul class="list-group">
                <li class="list-group-item">1. Find yourself a quiet place to relax. This is your time...a time for complete and utter relaxation.</li>
                <li class="list-group-item">2. Become aware of your breathing, and notice how your abdomen rises and falls with each breath.</li>
                <li class="list-group-item">3. Take a long slow deep breath in through your nose, all the way down into your stomach. Hold the breath for just a moment, and then exhale through your mouth. Allow your breath to carry away all stress and tension as the air floods out of your lungs.</li>
                <li class="list-group-item">4. Take another slow breath in through your nose. Fill your lungs completely. Hold it for a moment...and  release the breath through your mouth. Empty your lungs completely.</li>
                <li class="list-group-item">5. Take a third deep breath in. Hold it for a moment, and then let it go.</li>
                <li class="list-group-item">6. Feel your body now is more relaxed.</li>
                <li class="list-group-item">7. During this relaxation, you will gently tense various muscles throughout your body.</li>
                <li class="list-group-item">8. Just contract each muscle firmly but gently as you breathe in. At any time if you feel uncomfortable, you can simply relax and breathe normally.</li>
                <li class="list-group-item">9. Bring your awareness to your feet and toes. Breathe in deeply through your nose, and as you do, gradually curl your toes down and tense the muscles in the soles of your feet.</li>
                <li class="list-group-item">10. Hold your breath for just a few seconds and then release the muscles in your feet as you breathe out. Feel the tension in your feet wash away as you exhale. Notice how different your feet feel when tensed and when they are relaxed.</li>
                <li class="list-group-item">11. Now let go of all the tension. Breathe in, raise your wrists towards your shoulders and tighten the muscles in your upper arms.'</li>
                <li class="list-group-item">12. Hold that breath and that contraction for just a moment...and then gently lower your arms and breathe all the way out.</li>
                <li class="list-group-item">13. Feel how relaxing it is to release any tightness and to breathe away all the tension.</li>
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
                <Link to= '/MeditationList' className = "lastLink" >Go to List of Meditations</Link>
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
            <MeditationListPage />
        )
    }
}

export default MeditatingRelaxPage;