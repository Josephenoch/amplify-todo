import React from 'react'

const Task = () => {
  return (
    <div className="w-full bg-white px-12 py-10 hover:scale-110 hover:shadow-2xl cursor-pointer transition-all duration-200 flex justify-between items-center">
        <div className="flex flex-col">
            <span className="text-[#c4c3c3] text-lg">12:31</span>
            <span className='text-[#999999]'>Meet Emma</span>
        </div>
        <div className='w-10 h-10 rounded-full bg-[url(https://avatars.githubusercontent.com/u/60913747?s=400&u=f9c05b0acbda2691ecf034e903883aa5bffc0563&v=4)] bg-contain'></div>
    </div>
  )
}

export default Task