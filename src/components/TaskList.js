import React from 'react';
import {  useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import "./styles/taskList.css";
const TaskList = () => {
    
  const tasks = useSelector((state) => state.todo.filteredTodo);
  
  return (
      <>
          <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap"}}>
          {tasks.map((item,index)=>{
           return <div key={index} style={{ display:'flex', justifyContent:"center"}}><TaskItem task={item}  />
           </div>
          })}
          </div>
       
      
    </>
  )
}

export default TaskList;