import React from 'react'
import { useRouter } from 'next/router'


function timeOut() {
  const router=useRouter()
const handleClick=()=>{
  router.push("/")
}
  return (
    
  
    <div className="flex items-center justify-center  min-h-screen bg-red-50 relative h-screen">
      <button onClick={handleClick} className='px-2 py-2 bg-green-100 mt-5 absolute top-0 left-10'>Go back</button>
      
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">

      <h1 className='text-lg text-center text-red-600'>⏰ Times UP</h1>
      <p className=' text-lg text-center  text-red-500'>The Timer Has Reached the limit</p>
    </div>
    
    </div>
    
    

  )
}

export default timeOut