'use client'
import { SidebarContext } from '@/context/SidebarContext';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { BiSolidDockLeft, BiSolidDockRight } from "react-icons/bi";




export default function Sidebar({ children }: { children: ReactNode }) {
  const [docked, setDocked] = useState(() => {
    return localStorage.getItem('isDocked') === 'docked';
  })

  function toggleDocked() {
    localStorage.setItem('isDocked', !docked ? 'docked' : 'notDocked')
    setDocked((docked) => !docked);
  }

  return (
    <SidebarContext value={{ docked }}>
      <aside className={clsx(docked ? 'lg:w-[70px]' : 'lg:w-[250px]', 'overflow-visible  p-3 h-full')}>
        <div className="flex flex-col">
          <div className="logo flex justify-between my-3"><span>Kredibu</span>
            <span onClick={toggleDocked}>
              {
                docked ?
                  <BiSolidDockLeft /> :
                  <BiSolidDockRight />
              }
            </span>
          </div>
          <div className="flex flex-col">
            <span className=' text-neutral-300 text-xs uppercase'>individual</span>
            <button className='rounded-md px-3 bg-green-400' onClick={toggleDocked}>Dock</button>
          </div>
          {children}
        </div>
      </aside>
    </SidebarContext>
  )
}
