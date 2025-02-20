'use client'
import { ResponsiveCard } from "@/components/DesignComponents/ResponsiveCard";
import IndividualDashboardLayout from "@/components/IndividualDashboardLayout/IndividualDashboardLayout";

export default function IndividualDashboard() {

  return (
    <IndividualDashboardLayout>
      <ResponsiveCard>
      <section className="flex flex-col">
        <p>this is individual dashboard</p>
        </section>
      </ResponsiveCard>
    </IndividualDashboardLayout>
  )
}


