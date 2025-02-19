'use client'
import Sidebar from "@/components/DesignComponents/Sidebar/Sidebar";
import Menu, { MenuItem } from "@/components/DesignComponents/Sidebar/Menu";
import { ReactElement } from "react";
import { BiWindows } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { TbClipboardData } from "react-icons/tb";
import DashboardLayout from "../Dashboard/DashboardLayout";
import DashboardHeader from "../DesignComponents/Headers/DashboardHeaders";



const profileItems = [
  { id: 'one', href: '/dashboard/applications', label: 'Applications', icon: <TbClipboardData /> },
  { id: 'two', href: '/dashboard/permissions', label: 'Permissions', icon: <BiWindows /> },
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
