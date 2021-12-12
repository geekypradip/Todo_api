import { useState } from "react";
import './todo.css'
function TodoInput({hello}) {
    const [title,setTitle]=useState("")

       
    return ( 
        <div className="flex add_todo_box">
            <input  className="input_box" placeholder="add something" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button className='add_btn' onClick={()=>hello(title?title:alert("Please insert somthing.."))}>add</button>
        </div>
     );
}

export default TodoInput;