'use client'
import Menu, { MenuItem } from "@/components/DesignComponents/Sidebar/Menu";
import Sidebar from "@/components/DesignComponents/Sidebar/Sidebar";
import { ReactElement } from "react";
import { FiActivity } from "react-icons/fi";
import { RiBarricadeFill as ApplicationsIcon, RiNotificationLine } from "react-icons/ri";
import DashboardLayout from "../Dashboard/DashboardLayout";
import DashboardHeader from "../DesignComponents/Headers/DashboardHeaders";



const profileItems = [
  { id: 'one', href: '/dashboard/applications', label: 'Applications', icon: <ApplicationsIcon /> },
  { id: 'two', href: '/dashboard/permissions', label: 'Permissions', icon: <FiActivity /> },
  { id: 'three', href: '/dashboard/notifications', label: 'Notifications', icon: <RiNotificationLine /> }
]

const sidebar = <Sidebar >
  <Menu
    title="Profile"
    item={profileItems.map((val) => <MenuItem key={val.id} {...val} />)}
  />
</Sidebar>


export default function IndividualDashboardLayout({ children }: { children: ReactElement }) {

  return (
    <DashboardLayout sidebar={sidebar}>
      <div className="">
        <DashboardHeader />
        {children}
      </div>
    </DashboardLayout>
  )
}
