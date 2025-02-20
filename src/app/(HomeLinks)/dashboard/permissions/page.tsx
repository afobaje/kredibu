
import PermissionsTable from '@/components/DesignComponents/PermissionTable'
import { ResponsiveCard } from '@/components/DesignComponents/ResponsiveCard'
import IndividualDashboardLayout from '@/components/IndividualDashboardLayout/IndividualDashboardLayout'



export default function page() {
  return (
    <IndividualDashboardLayout>
      <ResponsiveCard>
        <div className='flex flex-col gap-3'>
          <h2 className='text-lg font-normal'>Check your requests</h2>
          <div className="flex justify-center w-full items-center">
            <PermissionsTable />
          </div>
        </div>
      </ResponsiveCard>
    </IndividualDashboardLayout>
  )
}
