import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export default function DialogComponent() {
  return (
    <Dialog>
        <DialogTrigger className='w-3/4'>  <div className='rounded-full h-2/3 inline-flex w-full justify-end items-center outline-none px-4 my-auto bg-gray-200' >
            <kbd>Ctrl+K</kbd>
          </div></DialogTrigger>
        <DialogContent className='bg-gray-500 h-2/3 font-normal rounded-lg outline-none'>
            <DialogHeader>

            <DialogTitle>
                <div className="flex bg-gray-200 w-full mt-4 rounded-md justify-between">
                <input className='bg-gray-200 w-3/4 px-3 py-2 rounded-2xl outline-none ' />
<button type='button' className='mr-3'>Esc</button>
                </div>
                </DialogTitle>
            </DialogHeader>
            <div className="flex">

            </div>
                
        </DialogContent>
    </Dialog>
  )
}
