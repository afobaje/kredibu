"use client"
import AppPage from '@/components/AppPage'
import AuthProvider from '@/context/AuthProvider'
import { useRouterReady } from '@/hooks/useRouterReady.hook';
import React, { ReactNode } from 'react'

export default function ProjectRoot({ children }: { children: ReactNode }) {
    const isReady = useRouterReady();
    return (
        isReady && <AuthProvider>
            <AppPage title="Kredibu - Your one-trust platform">{children}</AppPage>
        </AuthProvider>
    )
}
