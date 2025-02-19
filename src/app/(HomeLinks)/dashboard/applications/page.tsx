import { Card, ResponsiveCard } from '@/components/DesignComponents/ResponsiveCard'
import IndividualDashboardLayout from '@/components/IndividualDashboardLayout/IndividualDashboardLayout'

export default function page() {
    return (
        <IndividualDashboardLayout>
           <ResponsiveCard>
            <Card>
                <h1>this is applications</h1>
            </Card>
           </ResponsiveCard>
        </IndividualDashboardLayout>
    )
}
