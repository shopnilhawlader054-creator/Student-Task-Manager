import { useState } from 'react';
import TaskForm from "./components/TaskForm";
import ItemBackround from './components/ItemBackround';
import TaskButton from './components/TaskButton';
import TaskLists from './components/TaskList';

function App() {
const [ShowButton,setShowButton] = useState(true)
const [AllTask,setAllTask] = useState([])

  function handelbutton(){
    
    setShowButton(!ShowButton)
  }
  function savetasklist(alltask){
    setAllTask([...AllTask,alltask])
    console.log(AllTask);

  }

  function statuschange(){
    {AllTask.map((Item,index)
      if(userindex === index){
        setAllTask(AllTask,)
      }
    )}
  }

  return (
    <>
     
     <ItemBackround buttonname ={ShowButton?'View All':'Back'} button={handelbutton} >

    {ShowButton 
    ?<TaskForm alltask={savetasklist}  />
     :<TaskLists   tasklist={AllTask}/>

     }</ItemBackround>
     
     
    </>

 

  )
}

export default App
