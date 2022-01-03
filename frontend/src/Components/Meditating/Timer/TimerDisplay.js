import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'





const TimerDisplay = (state) => {

    const minutes = useSelector(state => state.minutes)
    //const mins = useSelector(state => state.mins)
    //const secs = useSelector(state => state.secs)
    const seconds = 0

    const [[mins, secs], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (mins === 0 && secs === 0) {
            setTime([59, 59]);
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    

    const setTimeHandler = (state) => {
        state.minutes = 20;
        console.log(state.minutes)
    }    

    return (
        <div>
            <h1>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</h1>
            <h1 value={minutes}>{minutes}:00</h1>
        </div>
    )
}

export default TimerDisplay
