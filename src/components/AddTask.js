import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addTask} from '../app/todoSlice';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import "./styles/addTask.css"

const AddTask = () => {
  const [text, setText] = useState('');
  
  const dispatch = useDispatch(); 
 
    const handeleSubmit = () => {
        
      dispatch(addTask(text));
  
        setText('');
    }
    

    return (
      <div className='addbar'>
     <div className='forms'>
      <Form>
          <Form.Control type="text" size="lg"
            placeholder="Add a New Task !"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
         
      </Form>
        
    
     <button className='buttons' onClick={() => handeleSubmit()}> <FontAwesomeIcon icon={faCirclePlus} size="3x" /> </button>

    </div>
      
    </div>
  )
}

export default AddTask