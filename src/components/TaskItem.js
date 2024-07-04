import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import{toggleTask,deleteTask,updateTodos, searchByName} from '../app/todoSlice'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckDouble, faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import "./styles/taskItem.css"
const TaskItem = (props) => {
     const [newText, setNewText] = useState("");
     const { task } = props;
  
      // houni jebt el val("all" , true , false) mel store
      // bech nkhali ay changement surtout fel etat mel true lel false 
      // yfi9 beha el ui  
      const val = useSelector((state)=>state.todo.searchVal)
      const dispatch = useDispatch()
      useEffect(()=>{
     
          dispatch(searchByName(val))
      
        },[task])

     return (
      <div className='Item'>
     
     <label>
      <input 
      type="checkbox"
      checked={task.done}
      onChange={() => dispatch(toggleTask(task.id))} />
        
      <span style={{ marginLeft: '10px' }}><strong>{task.text}</strong></span>              
     
      <div className='form'>
        
      <Form>
      <Form.Control type="text" 
      placeholder="tape the button after writing !"   
      onChange={(event) => { setNewText(event.target.value);
      }}/>

      </Form> 
      <div style={{marginTop:"8px" , display:"flex"}}>                   
      
      <button className='btn'
           onClick={() => {
            dispatch( updateTodos({ id: task.id, text: newText }));
           }}>
      <FontAwesomeIcon icon={faPenToSquare} />
      </button> 
                  
      <button className='btn' onClick={() => dispatch(deleteTask(task.id))} >  
      <FontAwesomeIcon icon={faTrash} />   
     </button> 
                                                     
      </div>                         
      </div>    
      </label>
      <span style={{marginLeft:'1rem'}}>{ (task.done===true) ? <span style={{color:'green'}}><FontAwesomeIcon icon={faCheckDouble} size='2x' /></span>: <span style={{color:'red'}}> <FontAwesomeIcon icon={faCheckDouble} size='2x' /></span>} </span>
      <div>
                   
      </div>
      </div>
  )
}

export default TaskItem