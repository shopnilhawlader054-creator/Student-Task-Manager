import { useState } from 'react';
import TaskForm from "./components/TaskForm";
import ItemBackround from './components/ItemBackround';
import TaskButton from './components/TaskButton';
import TaskLists from './components/TaskList';

function App() {
const [ShowButton,setShowButton] = useState(true)
const [AllTask,setAllTask] = useState([])
const [Complited,setComplited] = useState([0])
const [Pending,setPending] = useState([0])

  function handelbutton(){
    statuscount()
    setShowButton(!ShowButton)
  }
  function savetasklist(alltask){
    setAllTask([...AllTask,alltask])
    console.log(AllTask);

  }

  function statuschange(index){
    statuscount()
    console.log('hitting succes');
   const updatedeta = AllTask.map((Item,indexs)=>{
      if(indexs === index){
        return{
          ...Item,
          status:Item.status ==='pending' ? 'complited' : 'pending'
        }
     }
  return Item})
  setAllTask(updatedeta)}

  function delettask(index){
        console.log('hitting succes');
   const updatedeta = [...AllTask]
   updatedeta.splice(index,1)
  setAllTask(updatedeta)
  }
  function statuscount(){
    const pending = AllTask.filter((item) => item.status === 'pending').length
    const complited =  AllTask.filter((item) => item.status === 'complited').length
    
    setPending(pending)
    setComplited(complited)
  }

  return (
    <>
     
     <ItemBackround buttonname ={ShowButton?'View All':'Back'} button={handelbutton} >

    {ShowButton 
    ?<TaskForm alltask={savetasklist}  />
     :<TaskLists   tasklist={AllTask} statusbtn={statuschange} deletbtn={delettask} pending={Pending} complited={Complited}/>

     }</ItemBackround>
     
     
    </>

 

  )
}

export default App
