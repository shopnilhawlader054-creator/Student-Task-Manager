function TaskLists({ tasklist, statusbtn, deletbtn, pending, complited }) {
  return (
    <div className="w-full max-w-md mx-auto mt-4">

      {/* 📊 এখানে নতুন Task Statistics সেকশন যোগ করা হলো */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-600 font-medium">Total</p>
          <p className="text-lg font-bold text-blue-800">{tasklist.length}</p>
        </div>
        <div className="bg-yellow-50 p-2.5 rounded-xl border border-yellow-100">
          <p className="text-xs text-yellow-600 font-medium">Pending</p>
          <p className="text-lg font-bold text-yellow-800">
            {pending}
          </p>
        </div>
        <div className="bg-green-50 p-2.5 rounded-xl border border-green-100">
          <p className="text-xs text-green-600 font-medium">Completed</p>
          <p className="text-lg font-bold text-green-800">
            {complited}
          </p>
        </div>
      </div>

      {tasklist.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {tasklist.map((item, index) => (
            <li 
              key={index} 
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between transition hover:shadow-md"
            >
              {/* বাঁপাশে সিরিয়াল, নাম এবং স্ট্যাটাস */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm font-semibold">{index + 1}.</span>
                  <span className="text-gray-800 font-medium">{item.name}</span>
                </div>
                
                {/* 👈 এখানে টাস্কের স্ট্যাটাস শো করা হলো */}
                <span className="text-xs text-gray-500 capitalize ml-5 mt-0.5">
                  Status: <span className="font-semibold text-blue-600">{item.status}</span>
                </span>
              </div>
              
              {/* ডানপাশে টিকমার্ক এবং ডিলিট আইকন বাটন */}
              <div className="flex items-center gap-2">
                
                {/* Tickmark Icon Button */}
                <button 
                  onClick={()=>statusbtn(index)}
                  className="text-green-600 hover:text-green-800 h-3 w-3 rounded-full border-1 border-gray-400 hover:bg-green-50 transition cursor-pointer flex items-center justify-center" 
                  title="Complete"
                >
                  { item.status == 'complited'?
                  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>)
                  :null}
                
                </button>

                {/* Delete Icon Button */}
                <button 
                  className="text-red-600 hover:text-red-800 p-1.5 rounded-lg hover:bg-red-50 transition cursor-pointer" 
                  title="Delete"
                  onClick={()=>deletbtn(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>

              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500 font-medium">
          Empty! Not A Task
        </div>
      )}
    </div>
  );
}

export default TaskLists;