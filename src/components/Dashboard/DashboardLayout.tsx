import { DashboardLayoutType } from '@/Types/Type'

export default function DashboardLayout({ sidebar, children }: DashboardLayoutType) {
  return (
    <section className="flex h-screen w-full ">
      <div className='flex w-full'>
        {sidebar}
        <div className='flex-1 overflow-y-auto grid min-h-screen'>
          {children}
          </div>
      </div>
    </section>
  )
}
