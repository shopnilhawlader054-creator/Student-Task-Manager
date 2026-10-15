import { useState } from 'react';
import TaskForm from "./components/TaskForm";
import ItemBackround from './components/ItemBackround';
import TaskButton from './components/TaskButton';
import TaskLists from './components/TaskList';

function App() {
const [ShowButton,setShowButton] = useState(true)
const [AllTask,setAllTask] = useState([])
 const pending = AllTask.filter((item) => item.status === 'pending').length
    
 const complited =  AllTask.filter((item) => item.status === 'complited').length

  function handelbutton(){
    
    setShowButton(!ShowButton)
  }
  function savetasklist(alltask){
    setAllTask([...AllTask,alltask])
    console.log(AllTask);

  }

  function statuschange(index){
    
    console.log('hitting succes');
   const updatedeta = AllTask.map((Item,indexs)=>{
      if(indexs === index){
        return{
          ...Item,
          status:Item.status ==='pending' ? 'complited' : 'pending'
        }
     }
  return Item})
  setAllTask(updatedeta)
  
}

  function delettask(index){
    
        console.log('hitting succes');
   const updatedeta = [...AllTask]
   updatedeta.splice(index,1)
  setAllTask(updatedeta)
  
  }
 

  return (
    <>
     
     <ItemBackround buttonname ={ShowButton?'View All':'Back'} button={handelbutton} >

    {ShowButton 
    ?<TaskForm alltask={savetasklist}  />
     :<TaskLists   tasklist={AllTask} statusbtn={statuschange} deletbtn={delettask} pending={pending} complited={complited}/>

     }</ItemBackround>
     
     
    </>

 

  )
}

export default App
