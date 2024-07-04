import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({

    name: "todo",
    initialState: {
        todos:[
        { id:uuidv4(), text: "Doing Homeworks", done: false},
        { id:uuidv4(), text: "i have to see some friends !", done: true },
        { id:uuidv4(), text: "Learning more of Redux", done: false},
       
    ],
    filteredTodo:[
        { id:uuidv4(), text: "Doing Homeworks", done: false},
        { id:uuidv4(), text: "i have to see some friends !", done: true },
        { id:uuidv4(), text: "Learning more of Redux", done: false},
       
    ],
    searchVal :"All" 
},
    reducers: {
       /* hedhi bech n3abiw beha el val mte3na mel select fel header*/
        setSearchVal :(state,action)=>{
            state.searchVal = action.payload
        },
        /* add a new task function*/

        addTask: (state,action) => { 
            const newTask = {
                id: uuidv4(),
                done: false,
                text: action.payload,
                               
            }
            state.filteredTodo.push(newTask);
            state.todos.push(newTask)
        },

        /* change done state to !done*/
        toggleTask: (state, action) => {
            const task = state.filteredTodo.find(el => el.id === action.payload);  
            task.done = !task.done;

            const task2 = state.todos.find(el => el.id === action.payload);  
            task2.done = !task2.done;
            
           },
        
        /* delete task using filter by id */
        deleteTask: (state, action) => { 
            state.filteredTodo = state.filteredTodo.filter(el => el.id !== action.payload)
            state.todos = state.todos.filter(el => el.id !== action.payload)
            return state;
        },

        /* Update the text state from the input value */
        updateTodos: (state, action) => {
            // lezem fi kol blasa el etat mte3 array original tab9a taba3 fel jdid 
            // fel add wel update 
             state.filteredTodo.map((el) => {
                if (el.id === action.payload.id) {
                    el.text = action.payload.text;
                }
            })

            state.todos.map((el) => {
                if (el.id === action.payload.id) {
                    el.text = action.payload.text;
                }
            })
        },
        searchByName: (state, action) => {
            if(state.searchVal === "All"){
                 state.filteredTodo = state.todos
            }else{
                state.filteredTodo = state.todos.filter((item) => item.done === state.searchVal)
            }
        }
       }

})


export const { addTask, deleteTask, toggleTask,updateTodos,searchByName,setSearchVal} = todoSlice.actions;
export default todoSlice.reducer