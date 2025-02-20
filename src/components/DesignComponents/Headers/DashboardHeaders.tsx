import React from 'react'

export default function DashboardHeader() {
  return (
    <header className="h-[10vh] border-b border-gray-300 ">
      <nav className="flex w-full justify-end h-full">
        <div className="items flex justify-between">
          <input type="text" className='rounded-full h-2/3 outline-none px-4 my-auto bg-gray-200' />
          <User/>
        </div>
      </nav>
    </header>
  )
}

function User(){
  return <div className="flex mx-3">
    <span className='w-10 h-10 border mt-2 rounded-full bg-cyan-400'></span>
  </div>
}