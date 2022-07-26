import React from 'react'
import Header from './header'
import Task from './task'
const Todo = () => {
  return (
    <div className='w-full bg-[#E6F9FF] flex items-center justify-center h-full'>
      <div className="w-96 shadow-xl">
        <Header/>
        <Task/>
        <Task/>
        <Task/>

      </div>
    </div>
  )
}

export default Todo