import React from 'react'
import {useRouter} from 'next/router'

function index() {
  const router=useRouter()
  const startQuiz =()=>{
    router.push("/quiz")
  }
  return (
  <div className='min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center'>
    <div className='bg-white p-8 text-center '>
    <h1 className='text-3xl font-bold mB-4'> Welcome To The Quiz World
    </h1>
    <p className='text-gray-600 mb-4 '>Test your knowledge by answering a few Fun questions
    </p>
    <button onClick={startQuiz} className='bg-blue-300 rounded-full font-semibold px-6 py-3'> StartQuiz </button>
  </div>
  </div>
  )
}

export default index