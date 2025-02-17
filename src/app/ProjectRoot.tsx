"use client"
import AppPage from '@/components/AppPage';
import AuthProvider from '@/context/AuthProvider';
import { useRouterReady } from '@/hooks/useRouterReady';
import { ProjectType } from '@/Types/Type';



export default function ProjectRoot({ children }: ProjectType) {
    const isReady = useRouterReady();
    return (
        isReady && <AuthProvider>
            <AppPage title="Kredibu - Your one-trust platform">
                {children}
            </AppPage>
        </AuthProvider>
    )
}
