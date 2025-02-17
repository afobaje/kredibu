"use client"
import {  businessSignUp, individualSignup } from '@/app/actions/auth';
import { SignUpInput } from '@/components/DesignComponents/InputField';
import { TabList } from '@/components/DesignComponents/Tabs';
import { useActionState } from 'react';


export function IndividualForm() {

  const [state, action, pending] = useActionState(individualSignup, undefined)
  return <div className="flex w-full border p-10 border-cyan-950 shadow-md rounded-md">
    <form action={action} className='w-full'>
      <div className="flex w-full">
        <div className='flex flex-col w-full'>
          <SignUpInput inputName='fname' className='' placeholder='First Name' type='text' onChange={() => { }} />
          {state?.errors?.fname && <p>{state.errors.fname}</p>}
        </div>
        <div className="flex flex-col w-full">
          <SignUpInput inputName='lname' className='' placeholder='Last Name' type='text' onChange={() => { }} />

          {state?.errors?.lname && <p>{state.errors.lname}</p>}
        </div>
      </div>
      <SignUpInput inputName='email' placeholder='Email' type='text' onChange={() => { }} />
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <SignUpInput inputName='pnumber' placeholder='Phone Number' type='text' onChange={() => { }} />
      {state?.errors?.pnumber && <p>{state.errors.pnumber}</p>}
      <SignUpInput inputName='country' placeholder='Country' type='text' onChange={() => { }} />
      {state?.errors?.country && <p>{state.errors.country}</p>}
      <SignUpInput inputName='state' placeholder='State' type='text' onChange={() => { }} />
      {state?.errors?.state && <p>{state.errors.state}</p>}
      <SignUpInput inputName='password' placeholder='Password' type='text' onChange={() => { }} />

      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SignUpInput inputName='confirm_password' placeholder='Confirm Password' type='text' onChange={() => { }} />
      {state?.errors?.confirm_password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.confirm_password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      {/* {state?.errors?.confirm_password && <p>{state.errors.confirm_password}</p>} */}
      <button className='bg-green-500 rounded-md p-2 cursor-pointer text-white' disabled={pending} type="submit">Submit</button>
    </form>
  </div>
}

// function BusinessForm() {
//   const form = useForm<BusinessFormType>({
//     resolver: zodResolver(BusinessFormSchema),
//     defaultValues: {
//       businessName: ""
//     }
//   })


//   const onSubmit=(data:BusinessFormType)=>console.log(data)

//   return <form onSubmit={form.handleSubmit(onSubmit)}>
// <input type="text" {...form.register('businessName')} />
// <button type='submit'>Submit</button>
//   </form>
//   // <FormProvider {...form}>
//   //    <Form onSubmit={form.handleSubmit(onSubmit)} >
//   //   {/* <form onSubmit={form.handleSubmit(onSubmit)}> */}
//   //     <FormField
//   //     control={form.control}
//   //       name="businessName"
//   //       render={function ({ field, }: { field: ControllerRenderProps<FieldValues, string>; }): React.ReactElement {

//   //         return <FormItem>
//   //           <FormLabel>Business Name</FormLabel>
//   //           <FormControl>
//   //             <Input placeholder='Business Name' {...field} />
//   //           </FormControl>
//   //           <FormDescription>This is your business name</FormDescription>
//   //         </FormItem>
//   //       }} />
//   //       <button type='submit'>submit</button>
//   //   {/* </form> */}
//   // </Form>
//   // </FormProvider>

// }

function BusinessForm() {
  const [state, action, pending] = useActionState(businessSignUp, undefined)



  return <div className="flex w-full border p-10 border-cyan-950 shadow-md rounded-md">
    <form action={action} className='w-full'>
      <div className="flex w-full">
        <div className='flex flex-col w-full'>
          <SignUpInput inputName='businessName' className='' placeholder='First Name' type='text' onChange={() => { }} />
          {state?.errors?.businessName && <p>{state.errors.businessName}</p>}
        </div>
        
      </div>
     

   
      <button className='bg-green-500 rounded-md py-1 px-2 cursor-pointer text-white' disabled={pending} type="submit">Submit</button>
    </form>
  </div>

}

export default function SignUpPage() {
  // const [firstName, handleFirstName] = useInputValue()

  const tabsName = ['Individual', 'Business'];
  return (
    <div className='items-center justify-center flex '>
      <div className='flex flex-col min-w-3/6 items-center justify-center'>
        <h1>Create an account with Kredibu</h1>

        <div className="flex flex-col  w-full items-center justify-center ">
          <TabList
            className='min-h-[60lvh] w-full '
            tabsContent={[<IndividualForm key='one' />, <BusinessForm key='two' />]}
            tabsName={tabsName} />
        </div>
      </div>
    </div>
  )
}

