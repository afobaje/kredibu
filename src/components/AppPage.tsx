"use client"
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";


export function Header() {
    return <header className="sticky">
        <div className="relative top-0">
            <div className="flex justify-between items-center p-4">
                <span className="text-2xl font-bold"><Link href='/'>Kredibu</Link></span>
                <nav className="hidden lg:flex justify-evenly p-5 w-2/4 h-full bg-white  rounded-full">
                    <Link href="/">Why Kredibu</Link>
                    <Link href="/#">Products</Link>
                    <Link href="/developers">Developers</Link>
                </nav>
                <nav className="flex gap-4">
                    <Link href="/sign-up">Sign Up</Link>
                </nav>
            </div>
        </div>
    </header>
}

export default function AppPage({ children, title = 'Kredibu' }: { children: ReactNode, title?: string }) {
    return (

        <main className="flex flex-col page-x-padding">
            <Head>{title}</Head>
            <Header />
            <div>
                {children}
            </div>
            <style jsx>
                {`
                .page-x-padding{
                    padding:0 10px;
                }
                `}
            </style>
        </main>

    )
}
