import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <div className='flex flex-col  w-full h-[100vh] align-center justify-center'>

    <div className='flex w-full flex-col items-center align-center justify-center  gap-4'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/' className='text-red-400'>Return Home</Link>
    </div>
    </div>
  )
}
