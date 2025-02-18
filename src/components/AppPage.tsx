"use client"
import Head from "next/head";
import { ReactNode } from "react";



export default function AppPage({ children, title = 'Kredibu' }: { children: ReactNode, title?: string }) {
    return (
        <main className="flex flex-col ">
            <Head>{title}</Head>
            <div className="min-h-[100lvh]">
                {children}
            </div>
        </main>
    )
}

