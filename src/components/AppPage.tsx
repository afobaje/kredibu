"use client"
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import LinkButton from "./DesignComponents/LinkButton";


const navLinks = [
    {
        title: 'Why kredibu',
        link: '/'
    },
    {
        title: 'Products',
        link: '/#',
    },
    {
        title: 'Verify',
        link: '/verify'
    },
    {
        title: 'Developers',
        link: '/developers'
    },
];

export function Header() {
    return <header className="sticky top-0">
        <div className="relative top-0">
            <div className="flex justify-between items-center p-4">
                <span className="text-2xl font-bold"><Link href='/'>Kredibu</Link></span>
                <nav className="hidden lg:flex justify-evenly p-5 w-2/4 h-full bg-white  rounded-full">
                    {/* <Link href="/">Why Kredibu</Link>
                    <Link href="/#">Products</Link>
                    <Link href="/verify">Verify</Link>
                    <Link href="/developers">Developers</Link> */}
                    {navLinks.map((val, i) => <Link key={i} href={val.link}>{val.title}</Link>)}
                </nav>
                <nav className="flex gap-4">
                    <LinkButton className='p-2' link="/sign-up" text="Create a free account" />
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
