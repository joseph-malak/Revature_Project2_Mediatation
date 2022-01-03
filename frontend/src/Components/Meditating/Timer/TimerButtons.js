import React from 'react';
import { useDispatch } from 'react-redux';

const TimerButtons = (props) => {

    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({type: 'increment'})
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    }

    const startHandler = (state) => {
        // pass state.minutes to the
        dispatch({type: 'start'})
    }

    return (
        <div className = "wrapperpages">
            <button onClick={incrementHandler} className="btn btn-primary">+ Time</button>
            <button onClick={decrementHandler} className="btn btn-danger">- Time</button>
            <br />
            <button onClick={startHandler} className="btn btn-success">Begin Meditating</button>
        </div>
    )
}

export default TimerButtons
