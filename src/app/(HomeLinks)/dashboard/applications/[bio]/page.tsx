'use client'
import MenuModal from "@/components/DesignComponents/MenuModal";
import { ResponsiveCard } from "@/components/DesignComponents/ResponsiveCard";
import IndividualDashboardLayout from "@/components/IndividualDashboardLayout/IndividualDashboardLayout";
import { formatKey } from "@/utils/formatKey";


export default function Bio() {

  


  const newObj = {
    name: 'David Ikukoyi',
    // dateOfBirth: '12/12/1990',
    age: 43,
    education: 'BSc',
    maritalStatus: 'Married',
    currentJob: 'Software developer',
    address: '25,Peter Eledu str., Ishasi-Akute,Ogun State'
  }

  const newObjArr = Object.entries(newObj)
  console.log('we have', Object.entries(newObj), newObj)
  return (
    <IndividualDashboardLayout>
      <ResponsiveCard>
        <div className="flex items-center gap-5 w-full flex-col justify-center">
          <BioContainer title="Bio">
            {newObjArr.map(([first, second], i) => <div key={i}
              className="flex justify-between">
              <span>{formatKey(first)}</span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-balance">{second}</span>
                <MenuModal menuItems={[<button onClick={() => alert('hello world')} key={'oneone'} className="cursor-pointer">Edit</button>]} trigger={
                  <div className="flex cursor-pointer flex-col menu">
                    <span className=" rounded-full bg-black"></span>
                    <span className=" rounded-full bg-black"></span>
                    <span className=" rounded-full bg-black"></span>
                  </div>
                } />
              </div>
            </div>)}
          </BioContainer>

          <BioContainer title="Education">
            <div className="flex">Education is the meal ticket of life</div>
          </BioContainer>
        </div>
        <style>
          {`
        .menu{
        span{
        width:2px;height:2px;
        margin-bottom:2px;
        }}`}
        </style>
      </ResponsiveCard>
    </IndividualDashboardLayout>
  )
}








function BioContainer({ children, title }: { children: React.ReactNode, title: string }) {
  return <div className="flex p-3 bg-white items-center shadow-sm justify-center w-4/5">
    <div className="flex gap-2 w-full flex-col">
      <p className=" justify-start text-sm font-medium">{title}</p>
      <hr className='border border-gray-200 mb-3' />
      <div className="bio flex flex-col gap-4">
        {/* {newObjArr.map(([first, second], i) => <div key={i}
                className="flex justify-between">
                <span>{formatKey(first)}</span>
                <div className="flex items-center justify-center gap-2">
                  <span>{second}</span>
                  <MenuModal menuItems={[<button key={'oneone'} className="bg-red-500 p-4 rounded-md">Edit</button>]} trigger={
                    <div className="flex cursor-pointer flex-col menu">
                      <span className=" rounded-full bg-black"></span>
                      <span className=" rounded-full bg-black"></span>
                      <span className=" rounded-full bg-black"></span>
                    </div>
                  } />
                </div>
              </div>)}
               */}
        {children}
      </div>
    </div>
    {/* {children} */}
  </div>
}
