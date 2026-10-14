 
function ItemBackround({buttonname,button,form,children}){
    return(
        <div className="min-h-screen bg-sky-900 flex justify-center items-center">
  
  {/* মেইন কন্টেইনার যা ফর্মের সাইজ (w-96) নিয়ন্ত্রণ করবে */}
  <div className="w-96 flex flex-col gap-4">
    
    {/* View All বাটনটি ডানে নেওয়ার জন্য */}
    <div className="flex justify-end">
         <button onClick={button}  className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-1.5 px-4 rounded-lg cursor-pointer transition shadow-md">
        {buttonname}
      </button>
    </div>

    {/* মূল ফর্ম বক্স */}
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
   {children}
    </div>

  </div>
</div>
    )
}


export default ItemBackround