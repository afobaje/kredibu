'use client'
import Sidebar from "@/components/DesignComponents/Sidebar/Sidebar";
// import DashboardLayout from "../DashboardLayout";
import Menu, { MenuItem } from "@/components/DesignComponents/Sidebar/Menu";
import { ReactElement } from "react";
import { BiWindows } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { TbClipboardData } from "react-icons/tb";
import DashboardLayout from "../Dashboard/DashboardLayout";



const profileItems = [
  { id: 'one', href: '/dashboard/permissions', label: 'Permissions', icon: <BiWindows /> },
  { id: 'two', href: '/dashboard/applications', label: 'Applications', icon: <TbClipboardData /> },
  { id: 'three', href: '/dashboard/notifications', label: 'Notifications', icon: <RiNotificationLine /> }
]

export const sidebar = <Sidebar >
  <Menu
    title="Profile"
    item={profileItems.map((val) => <MenuItem key={val.id} {...val} />)}
  />
</Sidebar>


export default function IndividualDashboardLayout({children}:{children:ReactElement}) {

  return (
    <DashboardLayout sidebar={sidebar}>
      {children}
    </DashboardLayout>
  )
}
