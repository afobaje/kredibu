"use client"
import InputField from '@/components/DesignComponents/InputField';
import { TabList } from '@/components/DesignComponents/Tabs';


export function IndividualForm() {
  return <div className="flex">
    <form action="">
      <div className="flex">

      <InputField value='hello' placeholder='First Name' type='text' onChange={() => { }} />
      <InputField value='hello' placeholder='Last Name' type='text' onChange={() => { }} />
      </div>
      <InputField value='hello' placeholder='Email' type='text' onChange={() => { }} />
      <InputField value='hello' placeholder='Phone Number' type='text' onChange={() => { }} />
      <InputField placeholder='Country' type='text' onChange={() => { }} />
      <InputField placeholder='State' type='text' onChange={() => { }} />
      <InputField placeholder='Password' type='text' onChange={() => { }} />
      <InputField  placeholder='Confirm Password' type='text' onChange={() => { }} />
    </form>
  </div>
}

function BusinessForm() {
  return <p>Hi</p>
}

export default function SignUpPage() {
  // const [firstName, handleFirstName] = useInputValue()

  const tabsName = ['Individual', 'Business'];
  return (
    <div className='items-center  h-lvh justify-center flex'>
      <div>
        <h1>Kredibu</h1>
        <div className="flex flex-col border p-10 border-cyan-950 shadow-md rounded-md">
          {/* <TabList  /> */}
          <TabList
            tabsContent={[<IndividualForm key='one' />,<BusinessForm key='two' />]}
            // tabsContent={[<IndividualForm />, <BusinessForm />]}
            // renderItem={() => <InputField placeholder='First Name' value={firstName} onChange={handleFirstName} type='text' />} 
            tabsName={tabsName} />
        </div>
        {/* <form className='flex flex-col gap-3' action="">
          <input onChange={handleFirstName} type="text" placeholder='First Name' name="" id="" />
          <input type="text" placeholder='Last Name' name="" id="" />
          <button type="submit" onClick={function (e) {
            e.preventDefault();
            alert(firstName)
          }}>Submit</button>
        </form> */}
      </div>

    </div>
  )
}
