'use client'
import { Card, ResponsiveCard } from '@/components/DesignComponents/ResponsiveCard'
import IndividualDashboardLayout from '@/components/IndividualDashboardLayout/IndividualDashboardLayout'
import { useRouter } from 'next/navigation'


function DashboardCard( {label,buttonText,onClick}:{label:string,buttonText:string,onClick?:()=>void}) {
    return  <Card>
    <div className="flex flex-col gap-3">
        <div className="">
            <span className='text-sm'>{label}</span>
            <div className="flex justify-end">
                <button onClick={onClick} className='bg-green-400 cursor-pointer rounded-md py-2 px-4 text-white'>{buttonText}</button>
            </div>
        </div>
    </div>
</Card>
}


export default function ApplicationsPage() {

    const router=useRouter()
    function handleBio(){
        router.push('/dashboard/applications/afobaje')
    }

    return (
        <IndividualDashboardLayout>
            <ResponsiveCard>
                <div className="grid md:grid-cols-3 gap-3">
                    <DashboardCard onClick={handleBio} label='Edit your Bio' buttonText='Edit' />
                    <DashboardCard label='Check your Ratings' buttonText='Check details' />
                    <DashboardCard label='Check your overall score' buttonText='Check score' />
                    <DashboardCard label='Review(0/0)' buttonText='Check Reviews' />
                </div>
            </ResponsiveCard>
        </IndividualDashboardLayout>
    )
}
