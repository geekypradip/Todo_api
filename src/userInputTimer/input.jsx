import { useState } from "react";

function InputTimer({handleTimer}) {
    const [timer,setTimer]=useState(0);
    return ( 
            
        <div>
            <input type="number" 
            placeholder="Enter your destination second"
            value={timer}
            onChange={(e)=>setTimer(e.target.value)}
            />
            <button onClick={()=>handleTimer(timer)}>Start</button>
        </div>
     );
}

export default InputTimer;