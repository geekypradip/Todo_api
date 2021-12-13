import InputTimer from "./input";
import { useRef, useState } from "react";
import styles from './style.module.css'
function UserTimer() {
    const [time,setTime]=useState(0);
    const track=useRef(null);
    let v=0;
function handleTimer(initialTime){
    setTime(0)
    console.log(initialTime);
    if(initialTime>0){ track.current=initialTime;
    const id=setInterval(()=>{
            v=v+1;
            increaseTime(id);
    },1000)}
   else
   alert("second should not 0/empty/nagative")
}
  function increaseTime(id){
        if(v>+track.current)
        clearInterval(id)
        else{
            setTime((prev)=>prev+1);
        console.log(v,+track.current)
        }
        
  }
    return (  
        <div className={styles.container}>
           <InputTimer handleTimer={handleTimer}/>
           <h2>{time}</h2>
        </div>

    );
}

export default UserTimer;