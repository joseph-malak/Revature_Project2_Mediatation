import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

// class TimerClass extends React.Component {
//     constructor() {
//         super();
//         this.state = { time: {}, seconds: 300 };
//         this.timer = 0;
//         this.minutes = 5;
//         this.startTimer = this.startTimer.bind(this);
//         this.countDown = this.countDown.bind(this);
//     }
//     secondsToTime(secs){
//         let divisor_for_minutes = secs % (60 * 60);
//         let minutes = Math.floor(divisor_for_minutes / 60);
//         let divisor_for_seconds = divisor_for_minutes % 60;
//         let seconds = Math.ceil(divisor_for_seconds);
//         let obj = {
//             "m": minutes,
//             "s": seconds
//         };
//         return obj;
//     }
//     componentDidMount() {
//         let timeLeftVar = this.secondsToTime(this.state.seconds);
//         this.setState({ time: timeLeftVar });
//     }
//     startTimer() {
//         if (this.timer == 0 && this.state.seconds > 0) {
//         this.timer = setInterval(this.countDown, 1000);
//         }
//     }
//     countDown() {
//         // Remove one second, set state so a re-render happens.
//         let seconds = this.state.seconds - 1;
//         this.setState({
//             time: this.secondsToTime(seconds),
//             seconds: seconds,
//         });
//         // Check if we're at zero.
//         if (seconds == 0) { 
//             clearInterval(this.timer);
//         }
//     }
//     incrementHandler() {
//         this.setState({
//             seconds: this.state.seconds + 60
//         });
//     }
//     decrementHandler() {
//         this.setState({
//             seconds: this.state.seconds - 60
//         });
//     }
//     render() {
//         return(
//         <div>
//             <button onClick={this.startTimer}>Start</button>
//             <div>
//             <button onClick={this.incrementHandler} className="btn btn-primary">+ Time</button>
//             <button onClick={this.decrementHandler} className="btn btn-danger">- Time</button>
//             <br />
//             {/* <button onClick={startHandler} className="btn btn-success">Begin Meditating</button> */}
//         </div>
//             <h1>{this.state.time.m}:{this.state.time.s}</h1>
//             <h1>{this.state.time.m}:{this.state.time.s}</h1>
//             {/* <h1>{`${this.state.time.m.toString().padStart(2, '0')}:${this.state.time.s.toString().padStart(2, '0')}`}</h1> */}
//             {/* <h1>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</h1> */}
//         </div>
//         );
//     }
// }
//ReactDOM.render(<TimerClass/>, document.getElementById('View'));

const TimerClass = (props) => {

    const minutes = props.minutes
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
        <div className = "wrapperpages">
            <h1>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</h1>
            {/* <h1 value={minutes}>{minutes}:00</h1> */}
        </div>
    )
}

export default TimerClass



    // const minutes = useSelector(state => state.minutes)
    // //const mins = useSelector(state => state.mins)
    // //const secs = useSelector(state => state.secs)
    // const seconds = 0

    // const [[mins, secs], setTime] = useState([minutes, seconds]);

    // const tick = () => {
    //     if (mins === 0 && secs === 0) {
    //         setTime([59, 59]);
    //     } else if (secs === 0) {
    //         setTime([mins - 1, 59]);
    //     } else {
    //         setTime([mins, secs - 1]);
    //     }
    // };

    // const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    // useEffect(() => {
    //     const timerId = setInterval(() => tick(), 1000);
    //     return () => clearInterval(timerId);
    // });

