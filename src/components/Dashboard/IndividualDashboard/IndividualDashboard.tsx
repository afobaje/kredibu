/* eslint-disable react/jsx-key */
'use client'
import Sidebar from "@/components/DesignComponents/Sidebar/Sidebar";
import DashboardLayout from "../DashboardLayout";
import { RiNotificationLine } from "react-icons/ri";
import Menu, { MenuItem } from "@/components/DesignComponents/Sidebar/Menu";
import { BiWindows } from "react-icons/bi";


export const sidebar = <Sidebar>
<Menu
  title="Profile"
  item={[
    <MenuItem href="/dashboard/permissions" label="Permissions"
    icon=<BiWindows />
    />,
    <MenuItem href="/dashboard/notifications" label="Notifications"
      icon=<RiNotificationLine />
    />
  ]} />
</Sidebar>


export default function IndividualDashboard() {

 
  return (
    <DashboardLayout sidebar={sidebar}>
      <p>This is dashboard for individuals</p>
    </DashboardLayout>
  )
}
