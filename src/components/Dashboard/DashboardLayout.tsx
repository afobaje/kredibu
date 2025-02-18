import { DashboardLayoutType } from '@/Types/Type'



export default function DashboardLayout({ sidebar, children }: DashboardLayoutType) {
  return (

    <section className="flex h-screen">
      <div className='flex'>
        {sidebar}
        <div className='flex-1'>{children}</div>
      </div>
    </section>
    // <main>
    //   <header className='bg-green-600 h-[10vh]'></header>
    //   <section className="h-[90vh] bg-red-400">
    //     <div>
    //       {sidebar}
    //       <div className="flex-1">{children}</div>
    //     </div>
    //   </section>
    // </main>
  )
}
