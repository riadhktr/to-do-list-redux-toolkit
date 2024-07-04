import AddTask from "./components/AddTask";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
      <div >
      <TaskHeader />
      <AddTask />
      <TaskList />
      </div>  

    
 
  );
}

export default App;
