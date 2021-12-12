import axios from 'axios';
async function  PostTodo(payLoad){
    return(
        axios.post('https://bathandbodyworksserver.herokuapp.com/todo',
        payLoad
        )
    )
}
export default PostTodo;

 export async function GetTodo(){
    return(
        axios.get("https://bathandbodyworksserver.herokuapp.com/todo")
    )
    
}
export async function DeleteTodo(id){
    return(
        axios.delete(`https://bathandbodyworksserver.herokuapp.com/todo/${id}`)
    )
}
export async function UpdateStatus(id,status){
   
    return(
        axios.patch(`https://bathandbodyworksserver.herokuapp.com/todo/${id}`,{
            status:status
        })
    )
}