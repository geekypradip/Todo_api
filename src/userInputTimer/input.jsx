import { useState } from "react";

function InputTimer({handleTimer}) {
    const [timer,setTimer]=useState(0);
    const [disabled,setDisabled]=useState(false);
    return ( 
            
        <div>
            <input type="number" 
            placeholder="Enter your destination second"
            value={timer}
            onChange={(e)=>setTimer(e.target.value)}
            />
            <button 
            disabled={disabled}
            onClick={()=>{

                handleTimer(timer)
               setDisabled(true)
            }}>Start</button>
        </div>
     );

}

export default InputTimer;