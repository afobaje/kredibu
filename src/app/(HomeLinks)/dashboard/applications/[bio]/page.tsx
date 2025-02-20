import { ResponsiveCard } from "@/components/DesignComponents/ResponsiveCard";
import IndividualDashboardLayout from "@/components/IndividualDashboardLayout/IndividualDashboardLayout";
import { formatKey } from "@/utils/formatKey";


export default async function Bio({ params }: { params: Promise<{ bio: string }> }) {

  const link = (await params).bio;
  console.log(link);

  const newObj = {
    name: 'David Ikukoyi',
    age: 43,
    education: 'BSc',
    maritalStatus: 'Married',
    currentJob: 'Software developer',
    address: '25,Peter Eledu str., Ishasi-Akute,Ogun State'
  }

  const newObjArr = Object.entries(newObj)
  console.log('we have', Object.entries(newObj),newObj)
  return (
    <IndividualDashboardLayout>
      <ResponsiveCard>
        <div className="flex p-3 bg-white justify-center ">
          <div className="flex gap-2 w-full flex-col">
            <p className=" justify-start text-sm font-medium">Bio</p>
            <div className="bio flex flex-col gap-4">
              {newObjArr.map(([first, second], i) => <div key={i}
                className="flex justify-between">
                <span>{formatKey(first)}</span>
                <div className="flex items-center justify-center gap-2">
                <span>{second}</span>
                <button className="flex cursor-pointer flex-col menu">
                  <span className=" rounded-full bg-black"></span>
                  <span className=" rounded-full bg-black"></span>
                  <span className=" rounded-full bg-black"></span>
                  </button>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      <style>
        {`
        .menu{
        span{
        width:3px;height:3px;
        margin-bottom:2px;
        }}`}
      </style>
      </ResponsiveCard>
    </IndividualDashboardLayout>
  )
}








