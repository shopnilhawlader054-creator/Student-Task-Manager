function TaskLists({ tasklist }) {
 return (
    <div className="w-full max-w-md mx-auto mt-4">
      {tasklist.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {tasklist.map((item, index) => (
            <li 
              key={index} 
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between transition hover:shadow-md"
            >
              {/* বাঁপাশে সিরিয়াল, নাম এবং স্ট্যাটাস */}
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
                  className="text-green-600 hover:text-green-800 p-1.5 rounded-lg hover:bg-green-50 transition cursor-pointer" 
                  title="Complete"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>

                {/* Delete Icon Button */}
                <button 
                  className="text-red-600 hover:text-red-800 p-1.5 rounded-lg hover:bg-red-50 transition cursor-pointer" 
                  title="Delete"
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