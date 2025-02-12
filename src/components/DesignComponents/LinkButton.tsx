import type { LinkButtonType } from '@/Types/ComponentType'
import clsx from 'clsx'
import Link from 'next/link'



export default function LinkButton({ text, link, className }: LinkButtonType) {
    return (<>
        <Link className={clsx(className, 'rounded-md whitespace-nowrap  link font-bold text-lg text-white ')} href={link} >{text}</Link>
        <style>{`
        .link{
        background-color:var(--moderate-green);
        }
        `}</style>
    </>
    )
}
