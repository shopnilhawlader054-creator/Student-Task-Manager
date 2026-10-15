import { use, useState } from 'react';


function TaskForm({alltask}){
  const [TaskText,setTaskText] = useState({
          name:'',
          status:'pending'
        });
      //  const[TaskItem,setTaskItem] = useState([]);
      //  const [ShowTask,setShowTask] = useState(false)
      //  function addtask(){
      //   setTaskItem([...TaskItem,TaskText]);
        
      //  }

      function handelsubmit(e){
        e.preventDefault()
        if (!TaskText.name.trim()) {
         alert("দয়া করে একটি টাস্কের নাম লিখুন!"); 
          return;} 
        alltask(TaskText)
        setTaskText({name:'',status:'pending'})

      }
       
       
    return(
      
   

   
    
      <form onSubmit={handelsubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Add New Task</h1>
        
        <div>
          <input 
            type="text" 
            placeholder="Add new task..." 
            value={TaskText.name}
            onChange={(e) => setTaskText({...TaskText,name:e.target.value})}
            className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2.5 rounded-lg text-gray-700"
          />
        </div>

        <button 
          className="w-full py-2.5 px-4 hover:bg-blue-700 text-white font-medium bg-blue-600 rounded-lg transition duration-200 shadow-md cursor-pointer"
        >
          Submit
        </button>
      </form>
  
    )
}

export default TaskForm