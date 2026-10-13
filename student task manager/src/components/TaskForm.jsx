import { useState } from 'react';

function TaskForm(){
  cosnt [TaskText,setTaskText] = useState({
          name:'',
          status:'pending'
        });
       const[TaskItem,setTaskItem] = useState([]);
    return(
      
        <div className="min-h-screen bg-sky-900 flex justify-center items-center">
  
  {/* মেইন কন্টেইনার যা ফর্মের সাইজ (w-96) নিয়ন্ত্রণ করবে */}
  <div className="w-96 flex flex-col gap-4">
    
    {/* View All বাটনটি ডানে নেওয়ার জন্য */}
    <div className="flex justify-end">
      <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-1.5 px-4 rounded-lg cursor-pointer transition shadow-md">
        View All
      </button>
    </div>

    {/* মূল ফর্ম বক্স */}
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
      <form className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Add New Task</h1>
        
        <div>
          <input 
            type="text" 
            placeholder="Add new task..." 
            className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2.5 rounded-lg text-gray-700"
          />
        </div>

        

        <button 
          type="submit" 
          className="w-full py-2.5 px-4 hover:bg-blue-700 text-white font-medium bg-blue-600 rounded-lg transition duration-200 shadow-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</div>
    )
}

export default TaskForm