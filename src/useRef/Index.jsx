import { useRef } from "react";

function UseRefExampel() {
    const inputCather=useRef();
    function handleClick(){
      inputCather.current.focus()
    }
    return ( 
        <div style={{"display":"flex","justifyContent":"center","alignItems":"center","height":"100vh"}}>
            <input type="text" 
            placeholder="You don't have to type anything.."
            ref={inputCather} />
            <button onClick={()=>handleClick()}>Click me</button>
        </div>
     );
}

export default UseRefExampel;