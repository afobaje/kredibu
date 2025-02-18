import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import { sidebar } from '@/components/Dashboard/IndividualDashboard/IndividualDashboard'
import React from 'react'

export default function page() {
  return (
   <DashboardLayout sidebar={sidebar}>
    <p>this is notifications page</p>
   </DashboardLayout>
  )
}

