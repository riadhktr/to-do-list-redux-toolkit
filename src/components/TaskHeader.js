import { useDispatch, useSelector } from "react-redux"
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { searchByName, setSearchVal } from "../app/todoSlice";

const TaskHeader = () => {
  const tasks = useSelector((state) => state.todo.filteredTodo);
  console.log(tasks);
    const dispatch = useDispatch();
    const [value ,setValue] = useState("All"); 
    console.log(value);

    // deux filter simple just lel stats fel header
    const doneTask = tasks.filter((el) => el.done !== false);
    const undoneTask = tasks.filter((el) => el.done === false);

    // function wrapper lel search 
    // ba3ed ma n3abi el value mel select  fel redux
    // lancer le search  
    const handelSearch =()=>{
         if(value === "All"){
          dispatch(setSearchVal(value))
         }else{
          dispatch(setSearchVal(JSON.parse(value)))
         }
        
         dispatch(searchByName())
        
    }

   // a chaque changement de value on change l'affichage
    useEffect(()=>{
      handelSearch()
    },[value])

   
    
  return (
    <header style={{ display: 'flex', justifyContent: 'space-around' ,background:'#94bbe9'}}>
      <div style={{ display:'flex', alignItems:'center'}}>
      <h1>React Todo List</h1>
      <select onChange={(e)=>setValue(e.target.value)}>
        <option disabled>----</option>
        <option value="All">All</option>
        <option value={true}>true</option>
        <option value={false}>false</option>
      </select>
      </div>
      {/*counter for unfinished tasks */}
      <div style={{display:'flex' ,marginTop:'20px'}}>
        <strong> Tasks to DO: </strong>
        <p style={{ color: 'red', marginLeft: '10px' }}>
          {undoneTask.length} 
        <FontAwesomeIcon icon={faBell} size="lg" />
        </p>  
      </div>
       {/*counter for finished tasks */}
      <div style={{display:'flex',marginTop:'20px'}}>
       <strong> Finished Tasks:</strong>
        <p style={{ color: 'green', marginLeft: '10px' }}>
       {doneTask.length}  
       <FontAwesomeIcon icon={faBell} size="lg" />  
       </p> 
       </div>   
    </header>
  )
}

export default TaskHeader;