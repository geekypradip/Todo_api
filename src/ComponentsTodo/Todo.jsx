import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {v4 as uuid} from "uuid";
import './todo.css'
import PostTodo, { DeleteTodo, GetTodo, UpdateStatus } from './Api/Allrequests'
function Todo() {
    const [data,setdata]=useState([]);
    const [loader,setLoader]=useState(true);
    const [showAll,setShowAll]=useState(true)
    const handleAdd=(title)=>{
        if(title){ 
            const payLoad={
            title,
            status:false,
            id:uuid()
          }
            setLoader(true)
            PostTodo(payLoad)
            .then((res)=>{
                console.table(res);
                
               GetTodo()
                .then((res)=>{
                    console.log(res);
                setdata(res.data);
                setLoader(false)

                })
            })
        }
       
        // setdata([...data,payLoad])
    }
    useEffect(()=>{
        setLoader(true)
        GetTodo()
        .then((res)=>{
            console.log(res)
        setdata(res.data);
        setLoader(false)
    })
    },[])
    
    // const handleDelete=e=>{
    // // let parent=e.target.parentNode;
    // // parent.remove
    // }
    function handleToggle(id){
        // const updatedTodo=data.map((item)=>item.id===id?{...item,status:!item.status}:item)
        // setdata(updatedTodo);
       for(let status of data){
          if(status.id===id){
              setLoader(true)
              UpdateStatus(id,!status.status)
              .then((res)=>{
                  console.log(res)
                  GetTodo()
                  .then((res)=>{
                      setLoader(false)
                      setdata(res.data)
                  })
              })
              break;
          }
                     
        //    console.log(status.status)
       }
    }
    function handleDelete(id){
        setLoader(true)
       DeleteTodo(id).then((res)=>{
        //    console.log(res);
          GetTodo()
           .then((res)=>{
               console.log(res);
           setdata(res.data);
           setLoader(false)

           }) 
       })
    }
    return (
        
        <div className="todoContainer">
            
            <TodoInput hello={handleAdd}/>
           {
           loader?(<div>Loading..</div>):
                (
                    data.length?(data.filter((item)=>(showAll?true:!item.status))
                 .map(item=>
                   
                         <TodoList 
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        key={item.id}{...item}
                        />
                   
                       
                    )):(<div>No todo to show Add some todo...</div>)
               )
            }
            {
                data.length?(<button onClick={()=>setShowAll(!showAll)}>{showAll?"SHOW ONLY UNFINISHED TASK":"SHOW ALL TASK"}</button>):data
            }
        
        </div>

        
      );
}

export default Todo;