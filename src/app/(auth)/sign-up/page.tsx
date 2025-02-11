"use client"
import { ChangeEvent, useState } from 'react';

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('')

  function handleFirstName(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
    console.log(firstName)
  }
  return (
    <div className='items-center  h-lvh justify-center flex'>
      <div>
        <p>

          Sign up to kredibu
        </p>
        <form className='flex flex-col gap-3' action="">
          <input onChange={handleFirstName} type="text" placeholder='First Name' name="" id="" />
          <input type="text" placeholder='Last Name' name="" id="" />
          <button type="submit" onClick={function (e) {
            e.preventDefault();
            alert(firstName)
          }}>Submit</button>
        </form>
      </div>

    </div>
  )
}
