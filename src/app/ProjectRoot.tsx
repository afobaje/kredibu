"use client"
import AppPage from '@/components/AppPage';
import AuthProvider from '@/context/AuthProvider';
import { useRouterReady } from '@/hooks/useRouterReady';
import AppErrorBoundary from './Errorboundary';
import { PropsType } from '@/Types/Type';



export default function ProjectRoot({ children }: PropsType) {
    const isReady = useRouterReady();
    return (
        isReady &&
        <AppErrorBoundary>
            <AuthProvider>
                <AppPage title="Kredibu - Your one-trust platform">
                    {children}
                </AppPage>
            </AuthProvider>
        </AppErrorBoundary>
    )
}
