import { useEffect, useRef, useState } from "react";

function Timer() {
    const [state,setState]=useState(0);
    const timerRef=useRef(null);
    useEffect(()=>{
        return pauseTimer;
    },[]);
    const startTimer=()=>{
        if(timerRef.current===null)
        timerRef.current=setInterval(()=>{ 
            setState((prev)=>prev+1);
        },1000)
           
    };
    const pauseTimer=()=>{
        clearInterval(timerRef.current);
        timerRef.current=null;
    }
    const resetTimer=()=>{
        pauseTimer();
        setState(0);
    }
    return ( 
        <div>
            <h1>Timer</h1>
            <h3>{state}</h3>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
     );
}

export default Timer;