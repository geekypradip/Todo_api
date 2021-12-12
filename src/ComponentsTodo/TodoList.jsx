import './todo.css'
function TodoList({title,id,status,handleToggle,handleDelete}) {
    return ( 
        <div className="flex">
            <h3 className="todo_title">{title}</h3>
            <button className={status? "btn":"btn panding"} onClick={()=>handleToggle(id)}>{status? "Done":"panding"}</button>
            <button  className='btn delete' onClick={()=>handleDelete(id)}>Delete</button>
        </div>
     );
}

export default TodoList;