import React from 'react'
import DialogComponent from '../Dialog'

export default function DashboardHeader() {
  return (
    <header className="h-[10vh] border-b border-gray-300 ">
      <nav className="flex w-full justify-end h-full">
        <div className="items flex justify-between w-1/4">
          {/* <button className='rounded-full h-2/3 inline-flex justify-end items-center w-3/4 outline-none px-4 my-auto bg-gray-200' type='button'>
            <kbd>Ctrl+K</kbd>
          </button> */}
          <DialogComponent/>
          {/* <input type="text" className='rounded-full h-2/3 outline-none px-4 my-auto bg-gray-200' /> */}
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